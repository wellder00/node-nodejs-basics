import { readFile } from "fs/promises";
import { existsSync } from "fs";
import { fileURLToPath } from "url";

import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const readFileName = path.resolve(__dirname, './files/fileToRead.txt')
    try {
        if (!existsSync(readFileName)) {
            throw new Error('FS operation failed')
        }
        const contents = await readFile(readFileName, 'utf-8')
        console.log(contents)
    } catch (error) {
        console.error(error.message)
    }

};

await read();
