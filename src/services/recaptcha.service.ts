import axios from 'axios';
import { Recaptcha } from '../models/recaptcha.model';

export class RecaptchaService {

  verifyRecaptcha = async (recaptcha: Recaptcha): Promise<any> =>{
    const { response, secret, remoteip, verificationURL } = recaptcha;
    try {
      console.log(recaptcha)
      const result = await axios.post(`${verificationURL}?secret=${secret}&response=${response}`);
     
      return result.data;
    } catch (error) {
      throw error;
    }
  }
}
