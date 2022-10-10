function pattern(str){
    str = str.split('')
    let half = Math.floor(str.length/2);
    let res = ""
        for(let j=half; j<str.length; j++){
            res = res + str[j]
            console.log(res);
        }
        for(let j=0; j<half; j++){
            res = res + str[j]
            console.log(res);
        }
}

pattern("WELCOME")