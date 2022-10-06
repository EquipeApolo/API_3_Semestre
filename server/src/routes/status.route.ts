import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";

const statusRouter = Router()
const historico = require('../models/historicTable')

statusRouter.get('/status', (req: Request, res: Response, next: NextFunction)=>{
    res.sendStatus(StatusCodes.OK)
})



export default statusRouter;