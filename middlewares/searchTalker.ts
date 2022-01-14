import { Request, Response } from 'express';
const readFile = require('../utils/readFile');
import { Talker } from '../interfaces/Talker';

const searchTalker = async (req: Request, res: Response) => {
  const { q } = req.query;
  const search: string = String(q);
  const talkers = await readFile('./talker.json');
  const talker: Talker = talkers.filter((talker: Talker) => talker.name.toLowerCase().includes(search.toLowerCase()));
  return res.status(200).json(talker);
};

export default searchTalker;