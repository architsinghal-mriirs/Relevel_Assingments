// question is not properly worded and there are no examples so i am making two functions.

//this function returns 3 ^ n
function powerOfThree(n){
    let ans = 1;
    for(let i=0; i<n; i++){
        ans = ans * 3;
    }
    return ans;
}

//this function checks if number is a power of three
function powerChecker(n){
    if (n < 1) {
        return false;
    }

    while (n % 3 == 0) {
        n /= 3;
    }

    return n == 1;
}

let n = 1;
let result = powerOfThree(n)
let result2 = powerChecker(n)

console.log(result);
console.log(result2);

