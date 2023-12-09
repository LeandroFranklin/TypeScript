import { ConcessionariaInterface } from "./ConcessionariaInterface";
import Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface{
    private endereco : string;
    private listaDeCarros : Carro[];

    constructor(endereco : string, listaDeCarros : Carro[]){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    fornecerHorariosDeFuncionamento(): string {
        return "De segunda a sexta";
    }

    public fornecerEndereco() : string{
        return this.endereco;
    }

    public mostrarListaDeCarros() : Carro[]{
        return this.listaDeCarros;
    }
}