import { Request, Response } from 'express';
import { Talker } from '../interfaces/Talker';
import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';

const deleteTalker = async (req: Request, res: Response) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');
  const newTalkers = talkers
    .filter((talker: Talker) => talker.id !== Number(id));
  await writeFile('./talker.json', newTalkers);
  res.status(204).send().end();
};

export default deleteTalker;
