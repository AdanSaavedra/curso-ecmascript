class user{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    #speak(){
        return 'Hello'
    }
    greeting(){
        return `${this.speak()} ${this.name}`
    }
    get #uAge(){
        return this.age
    }
    set #uAge(n){
        this.age = n;
    }
}

const ana = new user('Ana', 15)
console.log(ana.uAge)
console.log(ana.uAge = 20);