class Animal{
    constructor(nome){   
        this.nome = nome
    }
    falar(){
        console.log(this.nome + " faz barulhos")
    }
}
let animal = new Animal("ABC")
animal.falar()

class Cachorro extends Animal{
    falar(){
        console.log(this.nome + " latir.") 
    }
}
let cachorro = new Cachorro("Dog")
cachorro.falar()

class Gato extends Animal{
    falar(){
        console.log(this.nome + " Miar.")
    }
}
let gato = new Gato("Cat")
gato.falar()