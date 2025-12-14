const removeFromArray = function(arr, ...args) {
    const valueToRemove = args;
    
    const newArr = arr.filter(value => !valueToRemove.includes(value));
    
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
