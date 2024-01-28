import { readdir, mkdir, copyFile } from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourceDir = path.resolve(__dirname, "files");
const destinationDir = path.resolve(__dirname, "files_copy");

const copy = async () => {
  try {
    if (!existsSync(sourceDir) || existsSync(destinationDir)) {
      throw new Error(`FS operation failed`);
    }
    const entries = await readdir(sourceDir, { withFileTypes: true });
    await mkdir(destinationDir, { recursive: true });

    for (const entry of entries) {
      const sourcePath = path.join(sourceDir, entry.name);
      const destinationPart = path.join(destinationDir, entry.name);

      await copyFile(sourcePath, destinationPart);
    }
  } catch (error) {
    console.error(error.message);
  }
};

await copy();
