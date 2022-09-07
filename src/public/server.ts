import express, { response } from 'express';
//import routes from './routes';

const app = express()

app.use('/static', express.static(__dirname + '/public'));
app.use('/static', express.static(__dirname + '/dist'));

app.get('/', (request, response) => {      
    return response.sendFile(__dirname + '/index.html')
})
//app.use(routes)
  
app.listen(3000, () => {
    console.log('Server strarted on port 3000!')
})
        