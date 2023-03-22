class Animal{
    constructor(nome, comprimento, patas, cor, ambiente, velocidade){

        this.nome = nome,
        this.comprimento = comprimento,
        this.patas = patas,
        this.cor = cor,
        this.ambiente = ambiente,
        this.velocidade = velocidade
    
    }
    AlterarNome(nome){
        this.nome = nome
    }
    AlterarCor(cor){
        this.cor = cor
    }
    AlterarAmbiente(ambiente){
        this.ambiente = ambiente
    }
    AlterarComprimento(comprimento){
        this.comprimento = comprimento
    }
    AlterarVelocidade(velocidade){
        this.velocidade = velocidade
    }
    AlterarPatas(patas){
        this.patas = patas
    }
    
    Dados(obj){
       console.table(obj);
    }
}
