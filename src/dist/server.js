"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//import routes from './routes';
const app = (0, express_1.default)();
var path = require('path');
var publico = path.join(__dirname);
app.get('/', function (req, res) {
    res.sendFile(path.join(publico, 'index.html'));
});
app.use('/Icons', express_1.default.static(path.join(__dirname, '..', 'public', 'Icons')));
app.use('/dist', express_1.default.static(path.join(__dirname, '..', 'dist')));
app.use('/js', express_1.default.static(path.join(__dirname, '..', 'js')));
app.listen(3000, () => {
    console.log('Server strarted on port 3000!');
});
