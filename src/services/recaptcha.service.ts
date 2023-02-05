import axios from 'axios';
import { Recaptcha } from '../models/recaptcha.model';

export class RecaptchaService {
  verifyRecaptcha = async (recaptcha: Recaptcha): Promise<any> =>{
    const { response, secret, verificationURL } = recaptcha;
    try {
      console.log(recaptcha)
      const result = await axios.post(verificationURL, {
        response,
        secret
      });
     
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
