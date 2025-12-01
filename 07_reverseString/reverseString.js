const reverseString = function(word) {
    let stringArray = word.split('');
    let newStringArray = stringArray.reverse();
    let newString = newStringArray.join('');
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
