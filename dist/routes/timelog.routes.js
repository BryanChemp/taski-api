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
const __1 = require("..");
const sendError_1 = require("../helpers/sendError");
const sendReponse_1 = require("../helpers/sendReponse");
const router = (0, express_1.Router)();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { data, error } = yield __1.supabase.from("timeLog").select("*");
    if (error) {
        (0, sendError_1.sendError)(res, 500, 'Error on get all timelogs from db');
    }
    (0, sendReponse_1.sendReponse)(res, 200, data);
}));
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const timeLog = req.body;
    const { data, error } = yield __1.supabase.from("timeLog").insert([timeLog]);
    if (error) {
        console.log('error', error);
        return (0, sendError_1.sendError)(res, 500, 'Error adding timeLog to the database');
    }
    (0, sendReponse_1.sendReponse)(res, 201, data);
}));
exports.default = router;
