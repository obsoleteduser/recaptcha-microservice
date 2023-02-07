import { unlink, access } from 'fs'
import logModel from '../models/log.model'
const clearTime = 1000*36000

export const clear = () =>{

access('src/middleware/access.log', (err)=>{
    if(err){console.log("File doesn't exit") 
    return
}
    const clear = () =>{
        setInterval(async ()=>{
            unlink('src/middleware/access.log', (err)=>{
                console.log(err);
                return
            })
            console.log("Logs has been cleared!");
           await logModel.deleteMany({})
        }, clearTime)
    }
    clear()
})

}