function createIdentityMatrix(rows) {
    var array = new Array(rows); 
    for(var i = 0; i < rows; i++) {
        array[i] = new Array(rows);
        for(var j = 0; j < rows; j++) {
            array[i][j] = i == j ? 1 : 0;
        }
    }
    return array;
}

console.log('createIdentityMatrix(4) => [ [1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], [0, 0, 0, 1] ]', 
createIdentityMatrix(4));


