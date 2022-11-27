import express, { Request, Response, NextFunction } from 'express'
import statusRouter from './routes/status.route';
import usersRoute from './routes/users.route'
import airplaneRoute from './routes/airplane.route';
import operationDistance from './routes/operationDistance.route';
import cors from 'cors';
import flapRoute from './routes/flap.route';
import airplaneFlapRoute from './routes/airplaneFlap.route';
import historicRoute from './routes/historic.route';
// const connection = require('./models/connect')



const app = express()

app.use(cors())

 // configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// configuração de rotas
app.use(usersRoute);
app.use(flapRoute);
app.use(airplaneRoute);
// app.use(operationDistance);
app.use(statusRouter);

app.use(airplaneFlapRoute);
app.use(historicRoute);


// inicialização do server
app.listen(3001,()=>{
    console.log("Server rodando na porta 3001");
    
})