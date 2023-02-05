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


app.get('/', (req, res)=>{
    res.send(`
    
    <form action="/recaptcha/verify" method="post">
  <div class="form-group">
    <!-- form inputs here -->
  </div>
  <div class="form-group">
    <div class="g-recaptcha" data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"></div>
  </div>
  <button type="submit">Submit</button>
</form>

<script src="https://www.google.com/recaptcha/api.js" async defer></script>

    
    `)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
