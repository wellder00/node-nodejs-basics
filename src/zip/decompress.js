import { createReadStream, createWriteStream } from "fs";
import { unlink } from "fs/promises";
import { createGunzip } from "zlib";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
  const inputFilePath = path.resolve(__dirname, "./files/archive.gz");
  const outputFilePath = path.resolve(__dirname, "./files/fileToCompress.txt");

  const input = createReadStream(inputFilePath);
  const output = createWriteStream(outputFilePath);
  const gunzip = createGunzip();
  input.pipe(gunzip).pipe(output);

  await new Promise((resolve, reject) => {
    output.on("finish", async () => {
      try {
        await unlink(inputFilePath);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

await decompress();
