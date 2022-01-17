import fs from 'fs/promises';
import { Talker } from '../interfaces/Talker';

const writeFile = (path: string, content: Talker[]): Promise<void> => {
  const data = JSON.stringify(content);
  return fs.writeFile(path, data);
};

export default writeFile;