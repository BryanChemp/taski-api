"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendError = sendError;
function sendError(res, status, message, error) {
    return res.status(status).json({ status, message, error });
}
