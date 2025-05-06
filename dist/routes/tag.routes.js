"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tags_mock_1 = require("../mocks/tags.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: tags_mock_1.mockTags
    };
    res.json(response);
});
exports.default = router;
