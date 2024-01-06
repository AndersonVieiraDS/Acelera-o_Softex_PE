"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
var express_1 = __importDefault(require("express"));
var reservaRoutes_1 = __importDefault(require("./routes/reservaRoutes"));
var espacoRoutes_1 = __importDefault(require("./routes/espacoRoutes"));
var usuarioRoutes_1 = __importDefault(require("./routes/usuarioRoutes"));
var app = (0, express_1.default)();
app.use('/api/reserva', reservaRoutes_1.default);
app.use('/api/espaco', espacoRoutes_1.default);
app.use('/api/usuario', usuarioRoutes_1.default);
exports.default = app;
