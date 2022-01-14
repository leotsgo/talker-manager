import { Router, Request, Response } from 'express';
const readFile = require('../utils/readFile');
const writeFile = require('../utils/writeFile');

import { Talker } from '../interfaces/Talker';

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