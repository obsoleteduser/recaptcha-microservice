import { config } from 'dotenv'
import { connect, set } from 'mongoose'
import { DB_URL } from './env'
config()
set('strictQuery', false)
export const connectToDb = async ()=>{
try{
    await connect(DB_URL)
    console.log("Connected to database!")
}catch(err){
    console.log("Connection failed!")
}
}
