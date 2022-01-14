import { Request, Response, NextFunction } from 'express';

import User from '../interfaces/User';

const validateEmail = (req: Request, res: Response, next: NextFunction) => {
  const user: User = req.body;
  const re: RegExp = /^\S+@\S+$/;

  if (!user.email) return res.status(400).json({ message: 'O campo "email" é obrigatório' });

  if (!(re.test(user.email))) return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });

  return next();
}

export default validateEmail;