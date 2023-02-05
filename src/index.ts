import express, {Request} from 'express';
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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
