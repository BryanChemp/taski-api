"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: []
    };
    res.json(response);
});
router.get('/by-task/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const response = {
        status: 200,
        message: '',
        data: []
    };
    res.json(response);
});
exports.default = router;
