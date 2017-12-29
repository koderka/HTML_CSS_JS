var input = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34],
];

var output = [
    false, // bo 11
    true,
    true,
    true,
    false, // bo 1
];

console.log(checkArray(input), output);

function isEven(number) {
    return number % 2 == 0;
}

function checkArray(array) {
    var result = [];
    for(var row = 0; row < array.length; row++) {
            var allEven = array[row].every(isEven);    
            result.push(allEven);
    }
    return result;
}
