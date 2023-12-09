import Moto from "./Moto";
import Carro from "./Carro";
import Concessionaria from "./Concessionaria";


let moto = new Moto();
moto.acelerar();

let carro = new Carro("Veloster", 3);

console.log(moto);
console.log(carro);

let concessionaria = new Concessionaria("", []);

console.log(concessionaria.fornecerHorariosDeFuncionamento());