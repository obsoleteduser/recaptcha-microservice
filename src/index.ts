import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import  RecaptchaRoute from './routes/recaptcha.route';
import cors from 'cors'
import bodyParser from 'body-parser';
import { PORT } from './config/env';
import logger from './middleware/logger';

dotenv.config();


const app = express();
app.use(cors<Request>())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/recaptcha', RecaptchaRoute);
app.use(logger)
app.get('/', (req: Request, res: Response)=>{
      res.send(`<h1>Welcome to Tahir's reCAPTCHA verification API!</h1>
                <p><b>Use this endpoint for verifying:</b> https://validation-microservice.onrender.com/recaptcha/verify</p>
                   `)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
