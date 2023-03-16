import { Personagem } from "./personagem.js";

export class Arqueiro extends Personagem {
    static tipo = "Arqueiro" //static = atributo da classe e não do objeto precisa colocar .contructor.tipo para acessar
    destreza
    static descricao = "Minha mira é certeira"

    constructor(nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return "Dominador de Flechas"
        }
        return super.obterInsignia()
    }
}