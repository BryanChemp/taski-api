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
const sendError_1 = require("../helpers/sendError");
const authService_1 = require("../services/authService");
const sendReponse_1 = require("../helpers/sendReponse");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json("");
});
router.post('/login', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email)
            return (0, sendError_1.sendError)(res, 400, 'Invalid email');
        if (!password)
            return (0, sendError_1.sendError)(res, 400, 'Invalid password');
        const authenticatedUser = yield (0, authService_1.authenticateUser)(email, password);
        if (!authenticatedUser)
            return (0, sendError_1.sendError)(res, 404, 'User not found in our database');
        (0, sendReponse_1.sendReponse)(res, 200, authService_1.authenticateUser);
    }
    catch (e) {
        console.error("Error loging user:", e);
        return (0, sendError_1.sendError)(res, 500, 'Internal server error', e);
    }
}));
router.post('/authenticate', (req, res) => {
    try {
        return;
    }
    catch (e) {
        console.error("Error authenticating user:", e);
        return (0, sendError_1.sendError)(res, 500, 'Internal server error', e);
    }
});
exports.default = router;
