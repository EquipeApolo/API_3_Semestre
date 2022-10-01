"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const http_status_codes_1 = require("http-status-codes");
const statusRouter = (0, express_1.Router)();
statusRouter.get('/status', (req, res, next) => {
    res.sendStatus(http_status_codes_1.StatusCodes.OK);
});
exports.default = statusRouter;
