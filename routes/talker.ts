import { Router, Request, Response } from 'express';

import { 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkCtt,
  createTalker, editTalker, deleteTalker, searchTalker } from '../middlewares';

import { Talker } from '../interfaces/Talker';
import readFile from '../utils/readFile';

const router = Router();

router.get('/search', validateToken, searchTalker);

router.get('/', async (_req: Request, res: Response) => {
  const talkers = await readFile('./talker.json');

  return res.status(200).json(talkers);
});

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const talkers = await readFile('./talker.json');

  const talker: Talker | undefined = talkers
    .find((speaker: Talker) => speaker.id === Number(id));

  if (!talker) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  return res.status(200).json(talker);
});

router.post(
  '/', 
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkCtt,
  createTalker,
);

router.put(
  '/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateTalkCtt,
  editTalker,
);

router.delete('/:id', validateToken, deleteTalker);

export default router;