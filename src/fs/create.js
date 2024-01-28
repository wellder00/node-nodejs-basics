import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import { fileURLToPath } from "url";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  const fullPath = path.resolve(__dirname, "./files/fresh.txt");
  try {
    if (existsSync(fullPath)) {
      throw new Error(`FS operation failed`);
    }
    await writeFile(fullPath, "I am fresh and young");
  } catch (error) {
    console.error(error.message);
  }
};

await create();
