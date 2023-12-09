"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qualquer_coisa = void 0;
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        this.velocidade += 10;
    }
    parar() {
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Carro;
exports.qualquer_coisa = "Teste de exportação/importação";
