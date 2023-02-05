import { Request, Response } from 'express';
import { RecaptchaService } from '../services/recaptcha.service';


export class RecaptchaController {
  private recaptchaService = new RecaptchaService();

   verify = async (req: Request, res: Response): Promise<void> =>{
    const response = req.body['g-recaptcha-response'];
    const verificationURL = process.env.RECAPTCHA_VERIFICATION_URL;
    const secret = process.env.RECAPTCHA_SECRET
    console.log(response)
    const recaptcha = {
      response,
      secret,
      verificationURL,
      remoteip: req.connection.remoteAddress
    };
    try {
      const result = await this.recaptchaService.verifyRecaptcha(recaptcha);
      if (result.success) {
        res.status(200).json({ message: 'Recaptcha verification successful', success: true });
      } else {
        res.status(400).json({ message: 'Recaptcha verification failed', success: false});
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  }
}
