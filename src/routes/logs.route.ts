import { Router } from 'express'
import logsController from '../controllers/logs.controller'

const logRouter = Router()

logRouter.get('/logs', logsController.getLogs)

export default logRouter