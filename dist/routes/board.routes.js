"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boards_mock_1 = require("../mocks/boards.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: boards_mock_1.mockBoards
    };
    res.json(response);
});
router.get('/:userId', (req, res) => {
    const userId = parseInt(req.params.userId);
    const boards = boards_mock_1.mockBoards.filter((board) => board.membersId.includes(userId));
    const response = {
        status: 200,
        message: '',
        data: boards
    };
    res.json(response);
});
exports.default = router;
