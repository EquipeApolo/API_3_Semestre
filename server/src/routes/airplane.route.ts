import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const airplaneRoute = Router();
const airplane = require('../models/airplaneTable')



airplaneRoute.get('/airplane', async(req: Request, res: Response, next: NextFunction)=>{
    const airplaneList = await airplane.findAll();
    res.status(StatusCodes.OK).send(airplaneList)
})

airplaneRoute.get('/airplane/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await airplane.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

airplaneRoute.post('/airplane/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newAirplane = req.body
    await airplane.create(newAirplane)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "Airplane cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "Airplane não cadastrado!"
        })
    })
})

airplaneRoute.put('/airplane/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedAirplane = req.body;
    modifiedAirplane.uuid = uuid
    await airplane.update(modifiedAirplane, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "Airplane atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "Airplane não atualizado!"
        })
     })
})


airplaneRoute.delete('/airplane/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await airplane.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "Airplane deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não deletado!"
        })
    })
})


export default airplaneRoute;