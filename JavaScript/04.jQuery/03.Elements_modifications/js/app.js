$(function(){

    var whereIAm = $('.where-i-am').find('div');
    
    
    function createSpan(text) {
        
        var	newElement1 = $(`<span>${text}</span>`);
        var add1 = whereIAm.before(newElement1);

        var	newElement2 = $(`<span>${text}</span>`);
        var add2 = whereIAm.append(newElement2);

        var	newElement3 = $(`<span>${text}</span>`);
        var add3 = whereIAm.prepend(newElement3);

        var	newElement4 = $(`<span>${text}</span>`);
        var add4 = whereIAm.after(newElement4);

    }

    createSpan("Jestem tutaj append");
});


