import { Request, Response, NextFunction } from 'express';
import { Talker } from '../interfaces/Talker';

const validateTalk = (req: Request, res: Response, next: NextFunction) => {
  const { talk }: Talker = req.body;

  if (!talk || !talk.watchedAt || !talk.rate) {
    return res.status(400).json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }

  return next();
}

export default validateTalk;