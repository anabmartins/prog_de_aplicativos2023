class Mamifero extends Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade, alimento){
        super(nome, comprimento, patas, cor, ambiente, velocidade, alimento)
        this.alimento = alimento
    }
}