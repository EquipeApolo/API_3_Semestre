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
const operationDistanceRoute = (0, express_1.Router)();
const operationDistance = require('../models/operationDistance');
operationDistanceRoute.get('/operationDistance', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const operationDistanceList = yield operationDistance.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(operationDistanceList);
}));
operationDistanceRoute.get('/operationDistance/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield operationDistance.findOne({ where: { id: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        });
    }
    else {
        return res.json(project);
    }
}));
operationDistanceRoute.post('/operationDistance/cadastrar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const values = req.body;
    const airplaneId = req.params.uuid;
    let ok = false;
    values.airplaneId = airplaneId;
    yield operationDistance.create(values)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "operation Distance cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        });
    });
}));
operationDistanceRoute.post('/operationDistance/cadastrar', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newOperationDistance = req.body;
    yield operationDistance.create(newOperationDistance)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "operation Distance cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não cadastrado!"
        });
    });
}));
operationDistanceRoute.put('/operationDistance/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedOperationDistance = req.body;
    modifiedOperationDistance.uuid = uuid;
    yield operationDistance.update(modifiedOperationDistance, {
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "operation Distance atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não atualizado!"
        });
    });
}));
operationDistanceRoute.delete('/operationDistance/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield operationDistance.destroy({
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "operation Distance deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "operation Distance não deletado!"
        });
    });
}));
exports.default = operationDistanceRoute;
