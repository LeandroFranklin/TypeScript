import  Carro, {qualquer_coisa as x} from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

let carroA = new Carro("Dodge Journey", 4);
let carroB = new Carro("Veloster", 3);
let carroC = new Carro("Cerato", 4);

let listaDeCarros: Carro[] = [carroA, carroB, carroC];

let concessionaria = new Concessionaria("Av Epitácio Pessoa", listaDeCarros);

console.log(concessionaria.mostrarListaDeCarros());

let pessoa1 = new Pessoa("Jorge", "Veloster");

listaDeCarros.map((carro : Carro) => {

    if(carro["modelo"] == pessoa1.dizerCarroPreferido()){
        pessoa1.comprarCarro(carro);
    }
})

console.log(pessoa1.dizerCarroQueTem());