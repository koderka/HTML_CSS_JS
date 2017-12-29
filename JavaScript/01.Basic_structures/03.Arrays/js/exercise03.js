function sum(a, b) {
    return a + b;
}

function distFromAverage(array) {
    var avg = array.reduce(sum) / array.length;
    var result = [];
    for(var i = 0; i < array.length; i++) {
        result.push(Math.abs(array[i] - avg));
    }
    return result;
}

console.log("distFromAverage([1,2,3,4,5,6,7]) => [3,2,1,0,1,2,3] (średnia z tablicy wejściowej to 4))", distFromAverage([1,2,3,4,5,6,7]));
console.log("distFromAverage([1,1,1,1]) => [0,0,0,0] (średnia z tablicy wejściowej to 1)", distFromAverage([1,1,1,1]));
console.log("distFromAverage([2,8,3,7]) => [3,3,2,2] (średnia z tablicy wejściowej to 5)", distFromAverage([2,8,3,7]));

