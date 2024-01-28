import { createReadStream } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  const sourceDir = path.resolve(__dirname, "./files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256");
  const stream = createReadStream(sourceDir);

  stream.on("data", (data) => {
    hash.update(data);
  });

  stream.on("end", () => {
    const hashResult = hash.digest("hex");
    console.log(hashResult);
  });
};

await calculateHash();
