import { Request, Response } from 'express';
import { io } from '../';
import { RECAPTCHA_SECRET_KEY, RECAPTCHA_VERIFICATION_URL } from  '../config/env';
import { RecaptchaService } from '../services/recaptcha.service';


export class RecaptchaController {
  private recaptchaService = new RecaptchaService();

   verify = async (req: Request, res: Response): Promise<void> =>{
    const response = req.body['g-recaptcha-response'];
    const verificationURL = RECAPTCHA_VERIFICATION_URL;
    const secret = RECAPTCHA_SECRET_KEY
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
        io.emit('status', {code: "Verified!"})
      } else {
        res.status(400).json({ message: 'Recaptcha verification failed', success: false});
        io.emit('status', {code: "Failed!"})
      }
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
      io.emit('status', {code: "Server error!"})
    }
  }
}
