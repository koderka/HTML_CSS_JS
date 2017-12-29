// setTimout & setInterval

function boilEgg(seconds) {
    setTimeout(function(){
        clearInterval(idInterval);
        console.log("jajko ugotowane")
    } 
        , seconds * 1000);

    var idInterval =  setInterval(function(){
        console.log('jajko się gotuje');
    }
        , 5000);
}
boilEgg(10);

// sorting function

function maxArgument() {
    var max = arguments[0];
    for(var i = 0; i < arguments.length; i++) {
        if(arguments[i] > max) {
            max = arguments[i];
        }
    }
    console.log(max);
}

maxArgument('maxArgument --> 98', 1, 2, 45, 98, 33, 21);
maxArgument('maxArgument --> 77', 67, 21, 14, 19, 77);



