async function arrayOfName(array){
    for await(let value of array){
        console.log(value)
    }
}

const names = arrayOfName(['Oscar', 'Adan', 'Ana', 'Maria'])
console.log('After')