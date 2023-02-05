import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import  RecaptchaRoute from './routes/recaptcha.route';
import cors from 'cors'
import bodyParser from 'body-parser';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();
app.use(cors<Request>())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/recaptcha', RecaptchaRoute);
app.get('/', (req: Request, res: Response)=>{
      res.send(`<h1>Welcome to Tahir's reCAPTCHA verification API!</h1>
                <p><b>Use this endpoint for verifing:</b> https://validation-microservice.onrender.com/recaptcha/verify</p>
                   `)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
