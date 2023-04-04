function* getId(){
    let value = 1;
    while(true){
        yield value++
    }
    
}

const id = getId()
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
console.log(id.next().value)
id.next().value
id.next().value