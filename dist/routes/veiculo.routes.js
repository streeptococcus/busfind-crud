"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const veiculo_controller_1 = require("../controllers/veiculo.controller");
const router = express_1.Router();
router.route('/')
    .get(veiculo_controller_1.getVeiculos)
    .post(veiculo_controller_1.createVeiculo);
router.route('/:veiculoId')
    .get(veiculo_controller_1.getVeiculo)
    .delete(veiculo_controller_1.deleteVeiculo)
    .put(veiculo_controller_1.updateVeiculo);
// router.route('/:linhaId')
//     .get(getVeiculosByLinha);
exports.default = router;
