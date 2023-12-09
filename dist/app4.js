"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConcessionariaDao_1 = require("./ConcessionariaDao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let dao = new ConcessionariaDao_1.ConcessionariaDao();
let concessionaria = new Concessionaria_1.default("", []);
dao.inserir(concessionaria);
