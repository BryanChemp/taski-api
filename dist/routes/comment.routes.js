"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comments_mock_1 = require("../mocks/comments.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: comments_mock_1.mockComments
    };
    res.json(response);
});
exports.default = router;
