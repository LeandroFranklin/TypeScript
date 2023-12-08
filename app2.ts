class Carro{
    private modelo : string;
    private numeroDePortas : number;
    private velocidade : number = 0;

    constructor(modelo : string, numeroDePortas : number){
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }

    public acelerar() : void{
        this.velocidade += 10;
    }

    public parar() : void{
        this.velocidade = 0;
    }

    public velocidadeAtual() : number{
        return this.velocidade;
    }
}

class Concessionaria{
    private endereco : string;
    private listaDeCarros : Carro[];

    constructor(endereco : string, listaDeCarros : Carro[]){
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }

    public fornecerEndereco() : string{
        return this.endereco;
    }

    public mostrarListaDeCarros() : Carro[]{
        return this.listaDeCarros;
    }
}

