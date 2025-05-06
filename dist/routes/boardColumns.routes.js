"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const boardColumns_mock_1 = require("../mocks/boardColumns.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: boardColumns_mock_1.mockBoardColumns
    };
    res.json(response);
});
router.get('/:boardId', (req, res) => {
    const boardId = parseInt(req.params.boardId);
    const columns = boardColumns_mock_1.mockBoardColumns.filter((column) => column.boardId == boardId);
    const response = {
        status: 200,
        message: '',
        data: columns
    };
    res.json(response);
});
exports.default = router;
