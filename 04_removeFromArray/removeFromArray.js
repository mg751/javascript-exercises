let removeFromArray = function(inputArray,inputElement){



    
    let equalityTest = function checkEquality(inputArray){
        return (inputElement !== inputArray)
    }

    newArray = inputArray.filter(equalityTest);
        return(newArray);
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
