import { Router } from 'express';
import { authValidator } from '../validators/auth.validator';
import { authController } from '../controllers/auth/auth.controller';

const router = Router();
router.post('/login', authValidator.login, authController.login);
export default router;
