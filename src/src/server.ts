import express, { response } from 'express';
import routes from './routes';

const app = express()

app.get('/', (request, response) => {
    return response.sendFile(__dirname + '/templates/index.html')
})
//app.use(routes)

app.listen(3000, () => {
    console.log('Server strarted on port 3000!')
})
       