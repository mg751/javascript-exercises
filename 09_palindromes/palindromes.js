const palindromes = function (input) {

let inputArray = Array.from(input);

let cleanLetters = function (letter){
    return letter.toLowerCase() != letter.toUpperCase();
}

let lowerCase = (letter) => letter.toLowerCase();

inputArray = inputArray.filter(cleanLetters);
inputArray = inputArray.map(lowerCase);

let arrayCopy = inputArray.map((x) => x);
arrayCopy.reverse();

let checkEquality = function (a,b) {
    for (let i = 0; i < inputArray.length; i++) {
        if (a[i] === b[i]) {
            continue;
        } else {
            return false;
        }
        }
        return true;
    }   

return checkEquality(inputArray, arrayCopy);

};




// // pseudocode
// remove spaces and punctuation from input string, make lowercase
// turn input string into array X, each character sep. by comma
// define new empty array Y
// push last value of array X into new array Y
// test equality of arrays (return true if equal)
// 
// 
// 
// 
// 
// 
// 






// Do not edit below this line
module.exports = palindromes;
