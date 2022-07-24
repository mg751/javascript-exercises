const removeFromArray = function(array, filter) {
    let inputArray = Array.from(array);
    let stringArray = inputArray.map(String);
    filterString = toString(filter);

    function checkArray(string){
     return (string !== filterString);
    
    }

    let output = stringArray.filter(checkArray);
    return(output);
        
}
// Do not edit below this line
module.exports = removeFromArray;
