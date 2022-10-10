function upperCase(str){
    if(typeof str === 'string'){
        return str.toUpperCase()
    }

    return "Not a string"
}

let a = "abc"

console.log(upperCase("My name is Archit Singhal"));