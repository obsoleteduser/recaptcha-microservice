import { Schema, model } from 'mongoose'

const logScheme  = new Schema({
    log: Object
})

const logModel = model('log', logScheme)
export default logModel