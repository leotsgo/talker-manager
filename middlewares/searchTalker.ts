import { Request, Response } from 'express';
import { Talker } from '../interfaces/Talker';
import readFile from '../utils/readFile';

const searchTalker = async (req: Request, res: Response) => {
  const { q } = req.query;
  const search = String(q);
  const talkers = await readFile('./talker.json');
  const talker: Talker[] = talkers
    .filter((speaker: Talker) => speaker.name
      .toLowerCase().includes(search.toLowerCase()));
  return res.status(200).json(talker);
};

export default searchTalker;