import { createGzip } from "zlib";
import { unlink } from "fs/promises";
import { fileURLToPath } from "url";
import path from "path";
import { createReadStream, createWriteStream } from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const input = path.resolve(__dirname, "./files/fileToCompress.txt");
  const output = path.resolve(__dirname, "./files/archive.gz");
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);

  source.pipe(gzip).pipe(destination);

  await new Promise((resolve, reject) => {
    destination.on("finish", async () => {
      try {
        await unlink(input);
        resolve();
      } catch (error) {
        reject(error);
      }
    });
  });
};

await compress();
