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
exports.updatePosicao = exports.deletePosicao = exports.getPosicao = exports.createPosicao = exports.getPosicoes = void 0;
const database_1 = require("../database");
function getPosicoes(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const posicoes = yield conn.query("SELECT * FROM posicao");
        return res.json(posicoes[0]);
    });
}
exports.getPosicoes = getPosicoes;
function createPosicao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPosicao = req.body;
        const conn = yield database_1.connect();
        conn.query("INSERT INTO posicao SET ?", [newPosicao]);
        return res.json({
            message: 'A posição foi criada com sucesso!'
        });
    });
}
exports.createPosicao = createPosicao;
function getPosicao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.posicaoId;
        const conn = yield database_1.connect();
        const posicao = yield conn.query("SELECT * FROM posicao WHERE id_posicao = ?", [id]);
        return res.json(posicao[0]);
    });
}
exports.getPosicao = getPosicao;
function deletePosicao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.posicaoId;
        const conn = yield database_1.connect();
        yield conn.query("DELETE FROM posicao WHERE id_posicao = ?", [id]);
        return res.json({
            message: 'A posição foi deletada com sucesso!'
        });
    });
}
exports.deletePosicao = deletePosicao;
function updatePosicao(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.posicaoId;
        const updatePosicao = req.body;
        const conn = yield database_1.connect();
        yield conn.query("UPDATE posicao SET ? WHERE id_posicao = ?", [updatePosicao, id]);
        return res.json({
            message: 'A posição foi atualizada com sucesso!'
        });
    });
}
exports.updatePosicao = updatePosicao;
