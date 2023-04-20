const repeatString = function (str, times) {
    return str.repeat(times);
};

let repeatedString = 'hey';
let numberOfTimes = 3;

console.log(repeatString(repeatedString, numberOfTimes));

module.exports = repeatString;