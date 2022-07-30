const sumAll = function(a,b){
    let array = [];
    for (let i = a; i <= b; i++){
        array.push(i);
    }
 
    let finalSum = 0;
    for (let i = 0; i <= array.length-1; i++) {
        finalSum += array[i];
    }
    return finalSum;
}



// Do not edit below this line
module.exports = sumAll;

