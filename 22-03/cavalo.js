class Cavalo extends Animal{
    constructor(nome, idade, cor, raca){
        // super = 'quem pariu mateus que balance'
        super(nome,idade,cor)
        // 'seja responsavel pelo seus problemas'
        this.raca = raca
    }
    Correr(nome){
        console.log('corre '+nome);
    }
}

class Ponei extends Cavalo{
    constructor(nome, idade, cor, raca){
        super(nome, idade, cor, raca)
    }
}