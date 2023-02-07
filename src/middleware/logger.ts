import express, {Request, Response, NextFunction} from 'express'
import fs from 'fs'
import path from 'path'
import geoip from 'geoip-lite'



const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

const logger = (req: Request, res: Response, next: NextFunction)=>{
    let clientIp = req.headers['x-forwarded-for']
    clientIp = String(clientIp).split(',')[0].trim()
    const geop = geoip.lookup(String(clientIp))
    const log = `${new Date().toISOString()} ${req.method} ${req.url} GEO: ${geop} IP: ${clientIp}`
    console.log(log)
    accessLogStream.write(`${log}\n`)
    next()
}


export default logger