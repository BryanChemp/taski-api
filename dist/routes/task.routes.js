"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tasks_mock_1 = require("../mocks/tasks.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: tasks_mock_1.mockTasks
    };
    res.json(response);
});
router.get('/by-column/:columnId', (req, res) => {
    const columnId = parseInt(req.params.columnId);
    const tasks = tasks_mock_1.mockTasks.filter((task) => task.columnId == columnId);
    const response = {
        status: 200,
        message: '',
        data: tasks
    };
    res.json(response);
});
exports.default = router;
