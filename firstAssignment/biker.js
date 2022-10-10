// petrol for the bikers
const petrolA = 10 // litres
const petrolB = 12 // litres

//Average for the bikers
const averageA = 20 //kmpl -> km per litre
const averageB = 15 //kmpl

//halts
const halts = [40, 98, 134, 179, 211, 248]

//total distance
function haltsCalculator(petrolA, petrolB, averageA, averageB, halts){
    if(halts.length == 0) return 'Empty halts array'

        const distA = petrolA * averageA
        const distB = petrolB * averageB

        let countA = 0;
        for(let i=0; i<halts.length; i++){
            if(halts[i] < distA){
                countA++
            }
        }

        let countB = 0;
        for(let i=0; i<halts.length; i++){
            if(halts[i] < distB){
                countB++
            }
        }

        console.log(countA, countB);
        return [countA, countB]
}

haltsCalculator(petrolA, petrolB, averageA, averageB, halts)
// Note : I don't know how the output is coming out to be 2 2. the question needs to have more sample inputs and better explanation.
//As per my calculation this solution seems to be correct but I am not sure what is required as the question statement is very poorly worded and only 1 sample input is not enough.