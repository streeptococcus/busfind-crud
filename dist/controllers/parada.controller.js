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
exports.updateParada = exports.deleteParada = exports.getParada = exports.createParada = exports.getParadas = void 0;
const database_1 = require("../database");
function getParadas(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const conn = yield database_1.connect();
        const paradas = yield conn.query("SELECT * FROM paradas");
        return res.json(paradas[0]);
    });
}
exports.getParadas = getParadas;
function createParada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newParada = req.body;
        const conn = yield database_1.connect();
        conn.query("INSERT INTO paradas SET ?", [newParada]);
        return res.json({
            message: 'A parada foi criada com sucesso!'
        });
    });
}
exports.createParada = createParada;
function getParada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.paradaId;
        const conn = yield database_1.connect();
        const parada = yield conn.query("SELECT * FROM paradas WHERE id_parada = ?", [id]);
        return res.json(parada[0]);
    });
}
exports.getParada = getParada;
function deleteParada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.paradaId;
        const conn = yield database_1.connect();
        yield conn.query("DELETE FROM paradas WHERE id_parada = ?", [id]);
        return res.json({
            message: 'A parada foi deletada com sucesso!'
        });
    });
}
exports.deleteParada = deleteParada;
function updateParada(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.paradaId;
        const updateParada = req.body;
        const conn = yield database_1.connect();
        yield conn.query("UPDATE paradas SET ? WHERE id_parada = ?", [updateParada, id]);
        return res.json({
            message: 'A parada foi atualizada com sucesso!'
        });
    });
}
exports.updateParada = updateParada;
