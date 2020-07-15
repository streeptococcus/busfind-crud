"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const parada_controller_1 = require("../controllers/parada.controller");
const router = express_1.Router();
router.route('/')
    .get(parada_controller_1.getParadas)
    .post(parada_controller_1.createParada);
router.route('/:paradaId')
    .get(parada_controller_1.getParada)
    .delete(parada_controller_1.deleteParada)
    .put(parada_controller_1.updateParada);
exports.default = router;
