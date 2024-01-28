import { Worker, isMainThread } from "worker_threads";
import { cpus } from "os";
import { fileURLToPath } from "url";

import path from "path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const workerJs = path.join(__dirname, "worker.js");

const performCalculations = async () => {
  if (isMainThread) {
    const cpuCores = cpus().length;

    const results = [];
    for (let i = 0; i < cpuCores; i++) {
      const worker = new Worker(workerJs, { workerData: 10 + i });

      results.push(
        new Promise((resolve, reject) => {
          worker.on("message", (result) => {
            resolve({ status: "res", data: result });
            worker.terminate();
          });

          worker.on("error", reject);
          worker.on("exit", (code) => {
            if (code !== 0) {
              reject(new Error(`Worker crash`));
            }
          });
        }),
      );
    }
    const res = await Promise.allSettled(results);
    const process = res.map((val) => val.value)
    console.log(process);
  }
};

await performCalculations();
