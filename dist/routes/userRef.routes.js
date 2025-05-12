"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sendError_1 = require("../helpers/sendError");
const sendReponse_1 = require("../helpers/sendReponse");
const __1 = require("..");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield __1.supabase.from("userRef").select("*");
    if (error) {
        (0, sendError_1.sendError)(res, 500, 'Error on get all usersRef from db');
    }
    (0, sendReponse_1.sendReponse)(res, 200, data);
}));
router.get('/by-ids', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const idsParam = req.query.ids;
        if (!idsParam) {
            return (0, sendError_1.sendError)(res, 400, 'Parameter "ids" is required');
        }
        const ids = idsParam.split(',').map(id => {
            const num = parseInt(id.trim());
            if (isNaN(num))
                throw new Error('Invalid ID format');
            return num;
        });
        const { data, error } = yield __1.supabase
            .from("userRef")
            .select("*")
            .in("id", ids);
        if (error) {
            return (0, sendError_1.sendError)(res, 500, 'Error on get userRefs by ids');
        }
        (0, sendReponse_1.sendReponse)(res, 200, data);
    }
    catch (error) {
        const msg = error instanceof Error ? error.message : 'Invalid request';
        (0, sendError_1.sendError)(res, 500, msg);
    }
}));
exports.default = router;
