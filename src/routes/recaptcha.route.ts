import { Router } from 'express';
import { RecaptchaController } from '../controllers/recaptcha.controller';

const router = Router();
const recaptchaController = new RecaptchaController();

router.post('/verify', recaptchaController.verify);

export default router;
