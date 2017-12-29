function add(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}

console.log('1 + 2 + 3 = 6', add([1, 2, 3]));

function multiply(array) {
    var multi = 1;
    for(var i = 0; i < array.length; i++) {
        multi *= array[i];
    }
    return multi;
}

console.log('1 * 2 * 3 * 4 = 24', multiply([1, 2, 3, 4]));
