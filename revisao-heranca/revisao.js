class Funcionario {
    constructor(nome, idade, cargo){
        this.nome = nome,
        this.idade = idade,
        this.cargo = cargo
    }
    getInfo() {
        console.log(`Informações do funcionário:\nNome: ${this.nome}\nIdade: ${this.idade}\nCargo: ${this.cargo}`);
    }
}

let Ana = new Funcionario('Ana', 17, 'TI')
Ana.getInfo()
