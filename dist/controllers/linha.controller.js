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
exports.getLinhaByParada = exports.updateLinha = exports.deleteLinha = exports.getLinha = exports.createLinha = exports.getLinhas = void 0;
const database_1 = require("../database");
function getLinhas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const linhas = yield conn.query("SELECT * FROM linhas");
        return res.json(linhas[0]);
    });
}
exports.getLinhas = getLinhas;
function createLinha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newLinha = req.body;
        const conn = yield database_1.connect();
        conn.query("INSERT INTO linhas SET ?", [newLinha]);
        return res.json({
            message: 'A linha foi criada com sucesso!'
        });
    });
}
exports.createLinha = createLinha;
function getLinha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.linhaId;
        const conn = yield database_1.connect();
        const linha = yield conn.query("SELECT * FROM linhas WHERE id_linha = ?", [id]);
        return res.json(linha[0]);
    });
}
exports.getLinha = getLinha;
function deleteLinha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.linhaId;
        const conn = yield database_1.connect();
        yield conn.query("DELETE FROM linhas WHERE id_linha = ?", [id]);
        return res.json({
            message: 'A linha foi deletada com sucesso!'
        });
    });
}
exports.deleteLinha = deleteLinha;
function updateLinha(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.linhaId;
        const updateLinha = req.body;
        const conn = yield database_1.connect();
        yield conn.query("UPDATE linhas SET ? WHERE id_linha = ?", [updateLinha, id]);
        return res.json({
            message: 'A linha foi atualizada com sucesso!'
        });
    });
}
exports.updateLinha = updateLinha;
function getLinhaByParada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.paradaId;
        const conn = yield database_1.connect();
        const linhas = yield conn.query("SELECT id_linha, nome_linha, linhas.created_at, linhas.modified_at, id_parada_fk FROM linhas INNER JOIN paradas WHERE id_parada = ?", [id]);
        return res.json(linhas[0]);
    });
}
exports.getLinhaByParada = getLinhaByParada;
