

const findTheOldest = function(obj) {

    obj.sort(function(a,b) {

        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }

        if ((a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) {
            return 1;
        } else {
            return -1;
        }
    });
    return obj[0];

};


//SHORT WORKI

// const findTheOldest = function(obj) {

//     obj.sort((a,b) => (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? 1 : -1);
    
//     return obj[0];

// };


    // for (let i = 0; i < obj.length; i++){
    // let ages = [];
    // ages.push(getAge(obj[i]));
    // return Math.max(ages);
    // }


// for (i = 0; i < obj.length; i++) {
    

// }


// Do not edit below this line
module.exports = findTheOldest;