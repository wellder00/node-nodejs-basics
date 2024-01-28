import { stdin } from "process";
import { createWriteStream } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const fileToWrite = path.resolve(__dirname, "./files/fileToWrite.txt");
  const output = createWriteStream(fileToWrite);
  stdin.pipe(output);
};

await write();
