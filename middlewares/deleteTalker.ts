import { Request, Response } from 'express';
import { Talker } from '../interfaces/Talker';
const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

const deleteTalker = async (req: Request, res: Response) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');
  const newTalkers = talkers.filter((talker: Talker) => talker.id !== Number(id));
  await writeFile('./talker.json', newTalkers);
  return res.status(204).send();
};

export default deleteTalker;