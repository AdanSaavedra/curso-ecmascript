// enhanced object literals

function newUser(user, age, country, uID){
    return {
        user,
        age,
        country,
        id: uID
    }
}

console.log(newUser("gndx", 34, "MX", 1))