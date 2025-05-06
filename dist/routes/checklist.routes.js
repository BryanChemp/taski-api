"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const checklist_mock_1 = require("../mocks/checklist.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: checklist_mock_1.mockChecklist
    };
    res.json(response);
});
router.get('/by-task/:taskId', (req, res) => {
    const taskId = parseInt(req.params.taskId);
    const checklist = checklist_mock_1.mockChecklist.filter((checklistItem) => checklistItem.taskId == taskId);
    const response = {
        status: 200,
        message: '',
        data: checklist
    };
    res.json(response);
});
exports.default = router;
