$(function(){
    var counter = $('#counter');
    var textarea = $('#textarea');
    
    textarea.on("input", function(){
        var count = parseInt(textarea.val().length);
        counter.text(count);

        if(count <= 33) {
            textarea.css("color", "green");
        }
        else if(count <= 66) {
            textarea.css("color", "yellow");
        }
        else if(count <= 99) {
            textarea.css("color", "red");
        }
        else {
            var text = textarea.val().substring(0, 99);
            textarea.val(text);
        }
    });
    
});