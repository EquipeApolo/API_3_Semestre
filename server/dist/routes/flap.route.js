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
const flapRoute = (0, express_1.Router)();
const flap = require('../models/flapTable');
flapRoute.get('/flap', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const flapList = yield flap.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(flapList);
}));
flapRoute.get('/flap/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield flap.findOne({ where: { id: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "flap não cadastrado!"
        });
    }
    else {
        return res.json(project);
    }
}));
flapRoute.post('/flap/cadastrar', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newflap = req.body;
    yield flap.create(newflap)
        .then((test) => {
        console.log(test);
        console.log(test.id);
        return res.json({
            id: test.id,
            erro: false,
            mensagem: "flap cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            id: -1,
            erro: true,
            mensagem: "flap não cadastrado!"
        });
    });
}));
flapRoute.put('/flap/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedFlap = req.body;
    modifiedFlap.uuid = uuid;
    yield flap.update(modifiedFlap, {
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "flap atualizado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "flap não atualizado!"
        });
    });
}));
flapRoute.delete('/flap/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield flap.destroy({
        where: {
            id: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "flap deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "flap não deletado!"
        });
    });
}));
exports.default = flapRoute;
