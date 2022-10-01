"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const usersRoute = (0, express_1.Router)();
const users = require('../models/userTable');
usersRoute.get('/users', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const usersList = yield users.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(usersList);
}));
usersRoute.get('/users/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield users.findOne({ where: { id: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        });
    }
    else {
        return res.json(project);
    }
}));
usersRoute.post('/users/cadastrar', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newUser = req.body;
    yield users.create(newUser)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não cadastrado!"
        });
    });
}));
usersRoute.put('/users/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedUser = req.body;
    modifiedUser.uuid = uuid;
    yield users.update(modifiedUser, {
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não atualizado!"
        });
    });
}));
usersRoute.delete('/users/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield users.destroy({
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuario deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Usuario não deletado!"
        });
    });
}));
exports.default = usersRoute;
