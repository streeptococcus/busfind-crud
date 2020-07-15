"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const linha_controller_1 = require("../controllers/linha.controller");
const router = express_1.Router();
router.route('/')
    .get(linha_controller_1.getLinhas)
    .post(linha_controller_1.createLinha);
router.route('/:linhaId')
    .get(linha_controller_1.getLinha)
    .delete(linha_controller_1.deleteLinha)
    .put(linha_controller_1.updateLinha);
// router.route(':paradaID')
//     .get(getLinhaByParada);
exports.default = router;
