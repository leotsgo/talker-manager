import { Request, Response, NextFunction } from 'express';
import { Talker } from '../interfaces/Talker';

const a = 'O campo "talk" é obrigatório e "watchedAt"';
const b = ' e "rate" não podem ser vazios';
const message = a + b;

const validateTalk = (req: Request, res: Response, next: NextFunction) => {
  const { talk }: Talker = req.body;
  if (!talk || !talk.watchedAt || (!talk.rate && talk.rate !== 0)) {
    return res
      .status(400)
      .json({ message });
  }
  return next();
};

export default validateTalk;