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
const airplaneRoute = (0, express_1.Router)();
const airplane = require('../models/airplaneTable');
airplaneRoute.get('/airplane', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const airplaneList = yield airplane.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(airplaneList);
}));
airplaneRoute.get('/airplane/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield airplane.findOne({ where: { id: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não cadastrado!"
        });
    }
    else {
        return res.json(project);
    }
}));
airplaneRoute.post('/airplane/cadastrar', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newAirplane = req.body;
    yield airplane.create(newAirplane)
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Airplane cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não cadastrado!"
        });
    });
}));
airplaneRoute.put('/airplane/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedAirplane = req.body;
    modifiedAirplane.uuid = uuid;
    yield airplane.update(modifiedAirplane, {
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Airplane atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não atualizado!"
        });
    });
}));
airplaneRoute.delete('/airplane/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield airplane.destroy({
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "Airplane deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "Airplane não deletado!"
        });
    });
}));
exports.default = airplaneRoute;
