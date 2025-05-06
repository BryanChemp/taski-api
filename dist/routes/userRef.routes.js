"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usersRef_mock_1 = require("../mocks/usersRef.mock");
const sendError_1 = require("../helpers/sendError");
const router = (0, express_1.Router)();
router.get('/', (req, res) => {
    const response = {
        status: 200,
        message: '',
        data: usersRef_mock_1.mockUserRefs
    };
    res.json(response);
});
router.get('/by-ids', (req, res) => {
    try {
        const idsParam = req.query.ids;
        if (!idsParam) {
            res.status(400).json({
                status: 400,
                message: 'Parameter "ids" is required',
                data: null
            });
        }
        const ids = idsParam.split(',').map(id => {
            const num = parseInt(id.trim());
            if (isNaN(num))
                throw new Error('Invalid ID format');
            return num;
        });
        const users = usersRef_mock_1.mockUserRefs.filter(user => ids.includes(user.id));
        const response = {
            status: 200,
            message: `Found ${users.length} users`,
            data: users
        };
        res.json(response);
    }
    catch (error) {
        const msg = error instanceof Error ? error.message : 'Invalid request';
        (0, sendError_1.sendError)(res, 500, msg);
    }
});
exports.default = router;
