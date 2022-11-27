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
const airplaneFlapRoute = (0, express_1.Router)();
const airplaneFlap = require('../models/airplaneFlapTable');
airplaneFlapRoute.get('/airplaneFlap', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const airplaneFlapList = yield airplaneFlap.findAll();
    res.status(http_status_codes_1.StatusCodes.OK).send(airplaneFlapList);
}));
airplaneFlapRoute.get('/airplaneFlap/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const project = yield airplaneFlap.findAll({ where: { airplaneId: uuid } });
    if (project === null) {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "airplaneFlap não cadastrado!"
        });
    }
    else {
        let arrayFlap = [];
        project.forEach(flap => {
            arrayFlap.push(flap.flapId);
        });
        return res.json(arrayFlap);
    }
}));
airplaneFlapRoute.post('/airplaneFlap/cadastrar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const newairplaneFlap = req.body.ids;
    const airplaneId = req.params.uuid;
    let ok = false;
    yield airplaneFlap.destroy({
        where: {
            airplaneId: airplaneId
        }
    });
    for (let c = 0; c < newairplaneFlap.length; c++) {
        const project = yield airplaneFlap.findOne({ where: { airplaneId: airplaneId, flapId: Number(newairplaneFlap[c]) } });
        if (project === null) {
            yield airplaneFlap.create({
                "airplaneId": Number(airplaneId),
                "flapId": Number(newairplaneFlap[c])
            }).then(() => {
                ok = true;
            }).catch(() => {
                ok = false;
                c = newairplaneFlap.length;
            });
        }
    }
    return res.json({
        ok: ok,
        mensagem: ok ? "airplaneFlap cadastrado com sucesso!" : "n foi"
    });
}));
airplaneFlapRoute.put('/airplaneFlap/modificar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    const modifiedAirplaneFlap = req.body.ids;
    modifiedAirplaneFlap.uuid = uuid;
    let ok = false;
    for (let c = 0; c < modifiedAirplaneFlap.length; c++) {
        yield airplaneFlap.update(modifiedAirplaneFlap, {
            where: {
                airplaneId: uuid
            }
        }).then(() => {
            ok = true;
        }).catch(() => {
            ok = false;
            c = modifiedAirplaneFlap.length;
        });
    }
    return res.json({
        ok: ok,
        mensagem: ok ? "airplaneFlap modificado com sucesso!" : "n foi"
    });
}));
airplaneFlapRoute.delete('/airplaneFlap/deletar/:uuid', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const uuid = req.params.uuid;
    yield airplaneFlap.destroy({
        where: {
            airplaneId: uuid
        }
    })
        .then(() => {
        return res.json({
            erro: false,
            mensagem: "airplaneFlap deletado com sucesso!"
        });
    }).catch(() => {
        return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).json({
            erro: true,
            mensagem: "airplaneFlap não deletado!"
        });
    });
}));
exports.default = airplaneFlapRoute;
