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
      verificationURL
    };
    try {
      const result = await this.recaptchaService.verifyRecaptcha(recaptcha);
      if (result.success) {
        res.status(200).send({ message: 'Recaptcha verification successful' });
      } else {
        res.status(400).send({ message: 'Recaptcha verification failed' });
      }
    } catch (error) {
      res.status(500).send({ message: 'Internal server error' });
    }
  }
}
