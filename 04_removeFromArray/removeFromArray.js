let removeFromArray = function(){ 
    let args = Array.from(arguments);
    let array = args[0]; // define input array from arguments
    let newArray = [];

    array.forEach((element) => {
        if (!args.includes(element)){
            newArray.push(element);
        }
    });
    return newArray;
}




// Do not edit below this line
module.exports = removeFromArray;


// Psuedocode
// Create test array
// Create function to test input equality
// to element in array
// Take specific element from test array out, 
// assign new array without the said element
// Create function to remove specific argument from array
// 
//
