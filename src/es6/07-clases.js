//  declarando
//class User {}
//  instanciando
//const newUser = new User();

class user{
    //metodos
    greeting(){
        return 'hello'
    }
}

const gndx = new user()
console.log(gndx.greeting())

const bebeloper = new user()
console.log(bebeloper.greeting())

//constructor

class user {
    constructor(){
        console.log('Nuevo Usuario')
    }
    greeting(){
        return 'hello'
    }
}

const david = new user()

//this

class user {
    constructor(name){
        this.name = name
    }
    //metodos
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
}

const adan = new user('adan')
console.log(adan.greeting())

// getters and setters

class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get uAge(){
        return this.age
    }
    set uAge(n){
        this.age = n;
    }
}

const ana = new user('Ana', 15)
console.log(ana.uAge)
console.log(ana.uAge = 20);