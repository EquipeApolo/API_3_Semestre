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
const historicRoute = (0, express_1.Router)();
const historic = require('../models/historicTable');
historicRoute.get('/historic', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const historicList = yield historic.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(historicList);
}));
historicRoute.get('/historic/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield historic.findOne({ where: { id: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não cadastrado!"
        });
    }
    else {
        return res.json(project);
    }
}));
historicRoute.post('/historic/cadastrar', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newhistoric = req.body;
    yield historic.create(newhistoric)
        .then((test) => {
        console.log(test);
        console.log(test.id);
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "historic cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "historic não cadastrado!"
        });
    });
}));
historicRoute.put('/historic/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedhistoric = req.body;
    modifiedhistoric.uuid = uuid;
    yield historic.update(modifiedhistoric, {
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "historic atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não atualizado!"
        });
    });
}));
historicRoute.delete('/historic/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield historic.destroy({
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "historic deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "historic não deletado!"
        });
    });
}));
exports.default = historicRoute;
