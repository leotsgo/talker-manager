import { Request, Response } from 'express';
import { Talker } from '../interfaces/Talker';
import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';

const createTalker = async (req: Request, res: Response) => {
  const talker = req.body;
  const talkers: Talker[] = await readFile('./talker.json');
  const id: number = talkers[talkers.length - 1].id + 1;

  const newTalker: Talker = { id, ...talker };

  talkers.push(newTalker);

  await writeFile('./talker.json', talkers);

  return res.status(201).json(newTalker);
};

export default createTalker;