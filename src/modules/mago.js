import { Personagem } from './personagem.js'

export class Mago extends Personagem{ //extends = herança
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'O mago é implacável!'

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome) //chama o construtor da classe pai
        this.elementoMagico = elementoMagico
        this.levelMagico = levelMagico
        this.inteligencia = inteligencia
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do ${this.elementoMagico}`
        }
        return super.obterInsignia() // sobre põe com o metodo da classe pai
        // exemplo de polimorfismo
    }
}