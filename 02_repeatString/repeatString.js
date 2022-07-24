const repeatString = function(string="default", num) {
    let output
    repetitions = parseInt(num);
    if (num > 0) {
        output=string;
        for (i = 1; i < repetitions; i++) {
            output += string;
            }
        } else if (num < 0) {
            output="ERROR"
        } else {
            output=""; 
    }
    return(output);
}

// Do not edit below this line
module.exports = repeatString;
