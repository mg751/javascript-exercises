const leapYears = function(a) {
    let inputYear = a;

    if (a % 400 === 0) {
        return true;
    } else if (a % 4 === 0 && a % 100 !== 0) {
        return true;
    } else { 
        return false;
    }

}
// Do not edit below this line
module.exports = leapYears;


// Define function and inputs
// 

