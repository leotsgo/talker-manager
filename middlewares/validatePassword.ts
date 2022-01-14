import { Request, Response, NextFunction } from 'express';

import User from '../interfaces/User';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  const user: User = req.body;

  if (!user.password) return res.status(400).json({ message: 'O campo "password" é obrigatório' });

  if (user.password.length < 6) return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });

  return next();
}

export default validatePassword;