import { Request, Response } from 'express';
import { Talker } from '../interfaces/Talker';
import readFile from '../utils/readFile';
import writeFile from '../utils/writeFile';

const editTalker = async (req: Request, res: Response) => {
  const { id } = req.params;
  const talkerToEdit = req.body;
  const editedTalker = { id: Number(id), ...talkerToEdit };
  let talkers: Talker[] = await readFile('./talker.json');
  talkers = [...talkers, editedTalker];
  await writeFile('./talker.json', talkers);
  return res.status(200).json(editedTalker); 
};

export default editTalker;