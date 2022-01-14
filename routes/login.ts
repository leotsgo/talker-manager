import { Router, Request, Response } from 'express';
import crypto from 'crypto';
import { validateEmail, validatePassword } from '../middlewares/index';
// teste
const router = Router();

router.use(validateEmail, validatePassword);
router.post('/', (_req: Request, res: Response) => {
  const token = crypto.randomBytes(8).toString('hex');

  return res.status(200).json({ token });
});

export default router;