"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const categories_mock_1 = require("../mocks/categories.mock");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: categories_mock_1.mockCategories
    };
    res.json(response);
});
exports.default = router;
