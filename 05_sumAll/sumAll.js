const sumAll = function(a,b){

    if (Math.sign(a) !== 1 || Math.sign(b) !== 1){
        return "ERROR";
    } else {

    let array = [];
    let start = Math.min(a,b);
    let finish = Math.max(a,b);
    for (let i = start; i <= finish; i++){
         array.push(i);
    }
 
    let finalSum = start;
    for (let i = start; i <= array.length-1; i++) {
        finalSum += array[i];
    }
    return finalSum;
}
}




// Do not edit below this line
module.exports = sumAll;

