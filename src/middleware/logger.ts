import express, {Request, Response, NextFunction} from 'express'
import fs from 'fs'
import path from 'path'

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

const logger = (req: Request, res: Response, next: NextFunction)=>{
    const log = `${new Date().toISOString()} ${req.method} ${req.url} IP: ${req.socket.remoteAddress}`
    console.log(log, )
    accessLogStream.write(`${log}\n`)
    next()
}


export default logger