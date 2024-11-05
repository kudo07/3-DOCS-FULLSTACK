import { Router } from 'express';
import { authenticate } from '../middlewares/auth';
import { documentController } from '../controllers/document/document.controller';
import { documentValidator } from '../validators/document.validator';

const router = Router();

router.get(':/id', authenticate, documentController.getOne);

router.get('/', authenticate, documentController.getAll);

router.put(':/id', authenticate, documentValidator.update);
export default router;
