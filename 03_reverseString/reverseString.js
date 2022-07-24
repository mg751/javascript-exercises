const reverseString = function(string) {
    let splittedString = string.split("");
    let stringLength = splittedString.length;
    let negStringLength = Math.abs(stringLength) * -1;
    let output ="";
    for (let i = -1; i >= negStringLength; i--) {
        output += splittedString[splittedString.length + i];
    }
    return(output);

};

// Do not edit below this line
module.exports = reverseString;