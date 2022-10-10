// mapper function to operate on each element of the array
// assigning to Array.protype to call.

Array.prototype.mapper = function(callback){
    const resultArray = []
    for(let i=0; i<this.length; i++){
        resultArray.push(callback(this[i], i, this))
    }
    return resultArray;
}

let arr = [1,4,9,25,36]

//Squaring the elements 
let square = arr.mapper(value => value*value)
console.log(square);

//Dividing them by five
let divByFive = arr.mapper(value => value/5)
console.log(divByFive);

//Root of the element
let roots = arr.mapper(value => value**0.5)
console.log(roots);