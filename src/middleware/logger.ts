import express, {Request, Response, NextFunction} from 'express'
import fs from 'fs'
import path from 'path'
import geoip from 'geoip-lite'
import logModel from '../models/log.model'
import { clear } from '../utils/logCleaner.util'

clear()


const logger = (req: Request, res: Response, next: NextFunction)=>{
    const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})
    let clientIp = req.headers['x-forwarded-for']
    const geop = geoip.lookup(`${clientIp}`.split(',')[0])
    const log = `${new Date().toISOString()} ${req.method} ${req.url} Country: ${geop?.country} City: ${geop?.city} IP: ${clientIp}`
    console.log(log)
    logModel.create({
        log
    })
    accessLogStream.write(`${log}\n`)
    next()
}


export default logger