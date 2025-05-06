"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendError_1 = require("../helpers/sendError");
const authService_1 = require("../services/authService");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    res.json("");
});
router.post('/login', (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email)
            return (0, sendError_1.sendError)(res, 400, 'Invalid email');
        if (!password)
            return (0, sendError_1.sendError)(res, 400, 'Invalid password');
        const authenticatedUser = (0, authService_1.authenticateUser)(email, password);
        if (!authenticatedUser)
            return (0, sendError_1.sendError)(res, 404, 'User not found in our database');
        return res.status(200).json({
            status: 200,
            message: 'Login realizado com sucesso',
            data: authenticatedUser,
        });
    }
    catch (e) {
        console.error("Error loging user:", e);
        return (0, sendError_1.sendError)(res, 500, 'Internal server error');
    }
});
router.post('/authenticate', (req, res) => {
    try {
        return;
    }
    catch (e) {
        console.error("Error authenticating user:", e);
        return (0, sendError_1.sendError)(res, 500, 'Internal server error');
    }
});
exports.default = router;
