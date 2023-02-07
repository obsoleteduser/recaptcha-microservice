import express, {Request, Response, NextFunction} from 'express'
import fs from 'fs'
import path from 'path'
import geoip from 'geoip-lite'



const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

const logger = (req: Request, res: Response, next: NextFunction)=>{
    console.log("Test")
    let clientIp = req.headers['x-forwarded-for']
    const geop = geoip.lookup(`${clientIp}`.split(',')[0])
    const log = `${new Date().toISOString()} ${req.method} ${req.url} Country: ${geop?.country} City: ${geop?.city} IP: ${clientIp}`
    console.log(log)
    accessLogStream.write(`${log}\n`)
    next()
}


export default logger