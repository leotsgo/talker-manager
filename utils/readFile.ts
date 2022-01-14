import fs from 'fs/promises';

const readFile = async (path: string): Promise<string> => {
  const data = await fs.readFile(path, 'utf8');
  return JSON.parse(data);
};

module.exports = readFile;