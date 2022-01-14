import { Request, Response, NextFunction } from 'express';

const validateTalkContent = (req: Request, res: Response, next: NextFunction) => {
  const { watchedAt, rate } = req.body.talk;
  const dateRe: RegExp = /^\d{2}\/\d{2}\/\d{4}$/;

  if (!(dateRe.test(watchedAt))) return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });

  if (rate < 0 || rate > 5) return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });

  next();
};

export default validateTalkContent;