"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Moto_1 = __importDefault(require("./Moto"));
const Carro_1 = __importDefault(require("./Carro"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let moto = new Moto_1.default();
moto.acelerar();
let carro = new Carro_1.default("Veloster", 3);
console.log(moto);
console.log(carro);
let concessionaria = new Concessionaria_1.default("", []);
console.log(concessionaria.fornecerHorariosDeFuncionamento());
