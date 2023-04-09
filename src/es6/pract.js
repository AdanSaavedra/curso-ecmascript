// function printTriangle(size, character) {
//     let result = "";
//     for (let i = 1; i <= size; i++) {
//         for (let j = 0; j < size - i; j++) {
//             result += " ";
//         }
//         for (let k = 0; k < i; k++) {
//             result += character;
//         }
//         if (i!== size)result += "\n";
//     }
//     return result
// }

// console.log(printTriangle(5,'$'))

function findFamousCats(cats) {
    var save = [0]
    for(let k = 0; k<cats.length;k++){
        let gg= cats[k].followers
        const highest = Math.max(...gg)
        save.push(highest)
    }
    const ress = Math.max(...save)
    console.log(ress)
}

console.log(findFamousCats([
    {
        name: "Luna",
        followers: [500, 200, 300]
    },
    {
        name: "Michi",
        followers: [100, 300]
    },
]))

