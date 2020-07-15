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
exports.getVeiculosByLinha = exports.updateVeiculo = exports.deleteVeiculo = exports.getVeiculo = exports.createVeiculo = exports.getVeiculos = void 0;
const database_1 = require("../database");
function getVeiculos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const veiculos = yield conn.query("SELECT * FROM veiculos");
        return res.json(veiculos[0]);
    });
}
exports.getVeiculos = getVeiculos;
function createVeiculo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newVeiculo = req.body;
        const conn = yield database_1.connect();
        conn.query("INSERT INTO veiculos SET ?", [newVeiculo]);
        return res.json({
            message: 'O veículos foi criada com sucesso!'
        });
    });
}
exports.createVeiculo = createVeiculo;
function getVeiculo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.veiculoId;
        const conn = yield database_1.connect();
        const veiculo = yield conn.query("SELECT * FROM veiculos WHERE id_veiculo = ?", [id]);
        return res.json(veiculo[0]);
    });
}
exports.getVeiculo = getVeiculo;
function deleteVeiculo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.veiculoId;
        const conn = yield database_1.connect();
        yield conn.query("DELETE FROM veiculos WHERE id_veiculo = ?", [id]);
        return res.json({
            message: 'O veículo foi deletada com sucesso!'
        });
    });
}
exports.deleteVeiculo = deleteVeiculo;
function updateVeiculo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.veiculoId;
        const updateVeiculo = req.body;
        const conn = yield database_1.connect();
        yield conn.query("UPDATE veiculos SET ? WHERE id_veiculo = ?", [updateVeiculo, id]);
        return res.json({
            message: 'O veículo foi atualizada com sucesso!'
        });
    });
}
exports.updateVeiculo = updateVeiculo;
function getVeiculosByLinha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.linhaId;
        const conn = yield database_1.connect();
        const veiculos = yield conn.query("SELECT id_veiculo, nome_veiculo, modelo_veiculo veiculos.created_at, veiculos.modified_at, id_linha_fk FROM veiculos INNER JOIN linhas WHERE id_linha = ?", [id]);
        return res.json(veiculos[0]);
    });
}
exports.getVeiculosByLinha = getVeiculosByLinha;
