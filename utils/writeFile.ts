import fs from 'fs/promises';

const writeFile = (path: string, content: []): void => {
  const data = JSON.stringify(content);
  fs.writeFile(path, data);
}

module.exports = writeFile;