import { existsSync } from "fs";
import { rename as renamePromise } from "fs/promises";
import { fileURLToPath } from "url";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  const oldName = path.resolve(__dirname, "./files/wrongFilename.txt");
  const newName = path.resolve(__dirname, "./files/properFilename.md");

  try {
    if (!existsSync(oldName) || existsSync(newName)) {
      throw new Error(`FS operation failed`);
    }
    await renamePromise(oldName, newName);
  } catch (error) {
    console.error(`${error.message}`);
  }
};

await rename();
