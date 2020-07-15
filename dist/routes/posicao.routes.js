"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posicao_controller_1 = require("../controllers/posicao.controller");
const router = express_1.Router();
router.route('/')
    .get(posicao_controller_1.getPosicoes)
    .post(posicao_controller_1.createPosicao);
router.route('/:posicaoId')
    .get(posicao_controller_1.getPosicao)
    .delete(posicao_controller_1.deletePosicao)
    .put(posicao_controller_1.updatePosicao);
exports.default = router;
