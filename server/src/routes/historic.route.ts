import { Router, Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const historicRoute = Router();
const historic = require('../models/historicTable')



historicRoute.get('/historic', async(req: Request, res: Response, next: NextFunction)=>{
    const historicList = await historic.findAll();
    res.status(StatusCodes.OK).send(historicList)
})

historicRoute.get('/historic/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const project = await historic.findOne({ where: { id: uuid } })
    
    if (project === null) {
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não cadastrado!"
        })
    } else {
        return res.json(project)
    }
})

historicRoute.post('/historic/cadastrar', async (req: Request, res: Response, next: NextFunction)=>{
    const newhistoric = req.body
    await historic.create(newhistoric)
    .then((test) =>{
        console.log(test)
        console.log(test.id)
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "historic cadastrado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "historic não cadastrado!"
        })
    })
})

historicRoute.put('/historic/modificar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    const modifiedhistoric = req.body;
    modifiedhistoric.uuid = uuid
    await historic.update(modifiedhistoric, {
        where: {
            id: uuid
          }
    })
     .then(() =>{
         return res.json({
             erro: false,
             mensagem: "historic atualizado com sucesso!"
         })
     }).catch(() =>{
         return res.status(StatusCodes.NOT_FOUND).json({
             erro: true,
             mensagem: "historic não atualizado!"
        })
     })
})


historicRoute.delete('/historic/deletar/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await historic.destroy({
        where: {
            id: uuid
          }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "historic deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não deletado!"
        })
    })
})

historicRoute.delete('/historic/deletar/userId/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await historic.destroy({
        where: {
            usersId: uuid
        }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "historic deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não deletado!"
        })
    })
})


historicRoute.delete('/historic/deletar/airplaneId/:uuid', async(req: Request<{ uuid: string }>, res: Response, next: NextFunction)=>{
    const uuid = req.params.uuid;
    await historic.destroy({
        where: {
            airplaneId: uuid
        }
    })
    .then(() =>{
        return res.json({
            erro: false,
            mensagem: "historic deletado com sucesso!"
        })
    }).catch(() =>{
        return res.status(StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não deletado!"
        })
    })
})


export default historicRoute;