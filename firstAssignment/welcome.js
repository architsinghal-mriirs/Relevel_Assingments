function pattern(str){
    str = str.split('')
    let res = ""
        for(let j=Math.floor(str.length/2); j<str.length; j++){
            res = res + str[j]
            console.log(res);
        }
        for(let j=0; j<Math.floor(str.length/2); j++){
            res = res + str[j]
            console.log(res);
        }
}

pattern("WELCOME")