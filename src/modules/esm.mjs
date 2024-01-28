import path, { sep } from "path";
import { release, version } from "os";
import { createServer as createServerHttp } from "http";
import { fileURLToPath } from "url";
import a from "./files/a.json" assert { type: "json" };
import b from "./files/b.json" assert { type: "json" };
import './files/c.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const random = Math.random();

let unknownObject;

random > 0.5 ? (unknownObject = JSON.stringify(a)) : (unknownObject = JSON.stringify(b));

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted");
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});

export default {
  unknownObject,
  myServer,
};
