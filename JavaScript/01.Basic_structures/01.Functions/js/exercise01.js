function circle(r) {

    if(typeof r != 'number') {
        return false;
    }
    var area = Math.PI * Math.pow(r, 2); 
    var circumference = 2* Math.PI * r;

    return { 'area': area, 'circumference': circumference};
}

console.log("jakies liczby", circle(10));
console.log("false", circle("abc"));

