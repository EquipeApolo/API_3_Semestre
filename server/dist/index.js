"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const status_route_1 = __importDefault(require("./routes/status.route"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const airplane_route_1 = __importDefault(require("./routes/airplane.route"));
const cors_1 = __importDefault(require("cors"));
const connection = require('./models/connect');
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use(users_route_1.default);
app.use(airplane_route_1.default);
app.use(status_route_1.default);
app.listen(3001, () => {
    console.log("Server rodando na porta 3001");
});
