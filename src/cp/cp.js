import {fileURLToPath} from 'url';
import path from 'path';
import {spawn} from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const script = path.join(__dirname, './files/script.js')

const spawnChildProcess = async (args) => {
  const childProcess = spawn('node', [script, ...args])
  console.log(script)
  process.stdin.pipe(childProcess.stdin)
  childProcess.stdout.pipe(process.stdout)
};

// Put your arguments in function call to test this functionality
spawnChildProcess(  ["2", 'a', '43', '1223' ] );
