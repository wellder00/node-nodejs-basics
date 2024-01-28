import { readdir } from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  try {
    const folderName = path.resolve(__dirname, "files");
    if (!existsSync(folderName)) {
      throw new Error("FS operation failed");
    }
    const entries = await readdir(folderName, { withFileTypes: true });
    const fileNames = entries.map((entry) => entry.name);
    console.log(fileNames);
  } catch (error) {
    console.error(error.message);
  }
};

await list();
