import { unlink } from "fs/promises";
import { fileURLToPath } from "url";
import { existsSync } from "fs";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  const fullPath = path.resolve(__dirname, "./files/fileToRemove.txt");
  try {
    if (!existsSync(fullPath)) {
      throw new Error(`FS operation failed`);
    }
    await unlink(fullPath);
  } catch (error) {
    console.error(error.message);
  }
};

await remove();
