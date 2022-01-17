import { Request, Response, NextFunction } from 'express';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  const tokenRegex = /^[a-zA-Z0-9]{16}$/;

  if (!token) return res.status(401).json({ message: 'Token não encontrado' });

  if (!(tokenRegex.test(String(token)))) {
    return res.status(401).json({ message: 'Token inválido' });
  }

  next();
};

export default validateToken;