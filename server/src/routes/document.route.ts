import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { documentController } from '../controllers/document/document.controller';

const router = Router();

router.get(':/id', authenticate, documentController.getOne);

export default router;
