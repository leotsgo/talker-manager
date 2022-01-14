import { Router, Request, Response } from 'express';

const readFile = require('../utils/readFile');

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  const talkers = await readFile('./talker.json');

  return res.status(200).json(talkers);
});

export default router;