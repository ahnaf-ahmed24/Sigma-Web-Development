let obj = {
    a : 1,
    b : "Ahnaf"
}
console.log(obj)

let animal = { 
    eats : true
};
let rabbit = {
    jamps : true
};

rabbit.__proto__ = animal;

class Animal {
    constructor(name){
        this.name = name
        console.log("object is created........")
    }
    eats(){
        console.log("eats.")
    }
    jumps(){
        console.log("jumps")
    }
}


class lion extends Animal{
    constructor(name){
        super(name)
        console,log("object is created and he is a lion ........")
    }
    eats(){
        console.log("lion Eating")
    }
}
let a = new Animal("Bunny")
console.log(a)