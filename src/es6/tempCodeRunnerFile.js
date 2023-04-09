function findFamousCats(cats) {
    console.log(Object.entries(cats.followers))
    // var save = [0]
    // for(let k = 0; k<cats.length;k++){
    //     let gg= cats[k].followers
    //     const highest = Math.max(...gg)
    //     save.push(highest)
    // }
    // const ress = Math.max(...save)
    // console.log(ress)
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