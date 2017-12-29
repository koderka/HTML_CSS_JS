function create2DArray(rows, columns) {
    var array = new Array(rows);
    var value = 0;
    for(var i = 0; i < rows; i++) {
        array[i] = new Array(columns);
        for(var j = 0; j < columns; j++) {
            array[i][j] = value++;
        }
    }
    return array;
}

console.log('create2DArray(3,4)', create2DArray(3,4));

