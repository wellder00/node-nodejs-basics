import { createReadStream } from "fs";
import { fileURLToPath } from "url";
import { stdout } from "process";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
  const readFile = path.resolve(__dirname, "files/fileToRead.txt");
  const input = createReadStream(readFile);
  input.on("data", (chunk) => stdout.write(chunk));
};

await read();
