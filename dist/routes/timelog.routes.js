"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timelogs_mock_1 = require("../mocks/timelogs.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: timelogs_mock_1.mockTimeLogs
    };
    res.json(response);
});
exports.default = router;
