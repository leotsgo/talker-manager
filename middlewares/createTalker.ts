import { Request, Response, NextFunction } from 'express';
import { Talker } from '../interfaces/Talker';
const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const createTalker = async (req: Request, res: Response) => {
  const talker  = req.body;
  let talkers: Talker[] = await readFile('./talker.json');
  const id = talkers[talkers.length - 1].id + 1;

  const newTalker: Talker = { id, ...talker };

  talkers.push(newTalker);

  await writeFile('./talker.json', talkers);

  return res.status(201).json(newTalker);
};

export default createTalker;