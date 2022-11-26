import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const operationDistanceRoute = Router();
const operationDistance = require('../models/operationDistance')



operationDistanceRoute.get('/operationDistance', async(req: Request, res: Response, next: NextFunction)=>{
    const operationDistanceList = await operationDistance.findAll();
    res.status(StatusCodes.OK).send(operationDistanceList)
})

operationDistanceRoute.get('/operationDistance/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await operationDistance.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

operationDistanceRoute.post('/operationDistance/cadastrar/:uuid', async (req: Request, res: Response, next: NextFunction)=>{
    const values = req.body
    const airplaneId = req.params.uuid;
    let ok = false
    
    values.airplaneId = airplaneId
    await operationDistance.create(values)
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "operation Distance cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        })
    })
   
})

operationDistanceRoute.post('/operationDistance/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newOperationDistance = req.body
    await operationDistance.create(newOperationDistance)
    .then(() =>{
        return res.json({
            // id: newoperationDistance.id,
            erro: false,
            mensagem: "operation Distance cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        })
    })
})

operationDistanceRoute.put('/operationDistance/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedOperationDistance = req.body;
    modifiedOperationDistance.uuid = uuid
    await operationDistance.update(modifiedOperationDistance, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "operation Distance atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "operation Distance não atualizado!"
        })
     })
})


operationDistanceRoute.delete('/operationDistance/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await operationDistance.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "operation Distance deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não deletado!"
        })
    })
})


export default operationDistanceRoute;