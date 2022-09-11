const fibonacci = function(num) {

    let input = num;
    if (num < 0) {
        return "OOPS";
    }
    
    let array = [1,1];
    for (let i = 1; i <= input+1; i++) {
         let sum = array[i] + array[i-1];
          array.push(sum);
    }

    return array[num-1];

};

// Do not edit below this line
module.exports = fibonacci;
