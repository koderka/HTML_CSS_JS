

function print2DArray(array) {
    for(var row = 0; row < array.length; row++) {
        for(var column = 0; column < array[row].length; column++) {
            console.log(array[row][column]);
        }
    }
}

var array = [
            [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12]
            ];

print2DArray(array);