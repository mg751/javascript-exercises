const getTheTitles = function(obj) {
    let array = [];
    for (let i = 0; i < obj.length; i++) {
        let bookName = obj[i].title;
        array.push(bookName);
    }
return array;
};

// Do not edit below this line
module.exports = getTheTitles;
