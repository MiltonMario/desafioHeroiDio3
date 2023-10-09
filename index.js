class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }



    ataque(tipo){
        let tipoDeAtaque;
        if(this.tipo == "guerreiro") {
            tipoDeAtaque = "espada"
        } else if(this.tipo == "mago") {
            tipoDeAtaque = "magia"
        } else if(this.tipo == "monge") {
            tipoDeAtaque = "artes marciais"
        } else if(this.tipo == "ninja") {
            tipoDeAtaque = "shuriken"
        } else {
            tipoDeAtaque = "com o que teve pela frente"
        }

        console.log(`O ${this.tipo} atacou usando ${tipoDeAtaque}`)
    }
};

let novato = new heroi("Jiraya", "28", "ninja");

novato.ataque();

