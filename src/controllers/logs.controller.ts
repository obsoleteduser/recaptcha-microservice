import logModel from "../models/log.model"
import {Request, Response} from 'express'

class logController{

    getLogs = async (req: Request, res: Response)=>{
        const logs = await logModel.find()
        res.status(200).json({logs})
    }

}

export default new logController()