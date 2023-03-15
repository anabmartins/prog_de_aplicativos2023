// ex de fixacao 2

class Animal {
    constructor(nome, cp, np, cor, amb, vel) {
            this.nome = nome,
            this.comprimento = cp,
            this.patas = np,
            this.cor = cor,
            this.ambiente = amb,
            this.velocidade = parseFloat(vel)
    }
    AlterarNome(nome) {
        this.nome = nome
    }
    AlterarComprimento(cp) {
        this.comprimento = cp
    }
    AlterarPatas(np) {
        this.patas = np
    }
    AlterarCor(cor) {
        this.cor = cor
    }
    AlterarAmbiente(amb) {
        this.ambiente = amb
    }
    AlterarVelocidade(vel) {
        this.velocidade = vel
    }
    Dados(nome, cp, np, cor, amb, vel) {
       let d = `
       Animal: ${this.nome}\nComprimento: ${this.cp}\nPatas: ${this.np}\nCor: ${this.cor}\nAmbiente: ${this.amb}\nVelocidade: ${this.vel}`;
    }
}

class Peixe extends Animal {
    constructor(nome, cp, np, cor, amb, vel, carac) {
        super(nome, cp, np, cor, amb, vel)
        this.caracteristica = carac
    }
    AlterarCaracteristica(carac){
        this.caracteristica = carac
    }
}

class Mamifero extends Animal {
    constructor(nome, cp, np, cor, amb, vel, al) {
        super(nome, cp, np, cor, amb, vel)
        this.alimento = al
    }
}

Animal.Dados()