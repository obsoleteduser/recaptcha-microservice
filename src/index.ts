import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import  RecaptchaRoute from './routes/recaptcha.route';
import cors from 'cors'
import bodyParser from 'body-parser';
import { PORT } from './config/env';
import logger from './middleware/logger';
import path from 'path'
import hbs from 'hbs'

dotenv.config();


const app = express();
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(cors<Request>())
app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/recaptcha', RecaptchaRoute);
app.use(logger)

app.get('/', (req: Request, res: Response)=>{
      res.render('main', {title: 'reCAPTCHA Microservice'})
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
