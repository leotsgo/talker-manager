import fs from 'fs/promises';
import { Talker } from '../interfaces/Talker';

const readFile = async (path: string): Promise<Array<Talker>> => {
  const data = await fs.readFile(path, 'utf8');
  return JSON.parse(data);
};

export default readFile;