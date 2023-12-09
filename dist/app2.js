"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
let carroA = new Carro_1.default("Dodge Journey", 4);
let carroB = new Carro_1.default("Veloster", 3);
let carroC = new Carro_1.default("Cerato", 4);
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default("Av Epitácio Pessoa", listaDeCarros);
console.log(concessionaria.mostrarListaDeCarros());
let pessoa1 = new Pessoa_1.default("Jorge", "Veloster");
listaDeCarros.map((carro) => {
    if (carro["modelo"] == pessoa1.dizerCarroPreferido()) {
        pessoa1.comprarCarro(carro);
    }
});
console.log(pessoa1.dizerCarroQueTem());
