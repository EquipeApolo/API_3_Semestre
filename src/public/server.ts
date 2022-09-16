import express, { response } from 'express';
//import routes from './routes';

const app = express()

var path = require('path');
var publico = path.join(__dirname);
 
app.get('/', function(req, res) {
    res.sendFile(path.join(publico, 'index.html'));
});  
 
app.use('/Icons', express.static(path.join(__dirname, '..', 'public', 'Icons')))
   
 
app.use('/dist', express.static(path.join(__dirname, '..', 'dist')))

app.use('/js', express.static(path.join(__dirname, '..', 'js')))   
 
app.listen(3000, () => {
    console.log('Server strarted on port 3000!')
})
         