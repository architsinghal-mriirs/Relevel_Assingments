function upperCase(str){
    if(typeof str === 'string'){
        return str.toUpperCase()
    }

    return "Not a string"
}

let string1 = "My name is Archit Singhal"
let string2 = 50
let string3 = null
let string4 = {} 

console.log(upperCase(string1))
console.log(upperCase(string2))
console.log(upperCase(string3))
console.log(upperCase(string4))