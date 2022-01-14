import { Router, Request, Response } from 'express';

const readFile = require('../utils/readFile');

const router = Router();


// Interface para o tipo do palestrante
interface Talk {
  watchedAt: string;
  rate: number;
}
interface Talker {
  name: string;
  age: number;
  id: number;
  talk: Talk;
}

router.get('/', async (req: Request, res: Response) => {
  const talkers = await readFile('./talker.json');

  return res.status(200).json(talkers);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');

  const talker: Talker = talkers.find((talker: Talker) => talker.id === Number(id));

  if (!talker) return res.status(404).json({ message: "Pessoa palestrante não encontrada" });

  return res.status(200).json(talker);
});

export default router;