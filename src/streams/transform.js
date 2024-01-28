import { Transform } from "stream";

class Reverse extends Transform {
  constructor(options) {
    super(options);
  }

  _transform(chunk, _, callback) {
    const reversedChunk = chunk.toString().split("").reverse().join("");
    this.push(reversedChunk);
    callback();
  }
}

const transform = async () => {
  const reverseStream = new Reverse();
  process.stdin.pipe(reverseStream).pipe(process.stdout);
};

await transform();
