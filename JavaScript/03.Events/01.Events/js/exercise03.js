document.addEventListener("DOMContentLoaded", 
function() {
    var buttons = document.querySelectorAll('button[id^="button"]');
    console.log(buttons);

    buttons.forEach( function(button){
        button.addEventListener("click",
            function(){
                document.querySelector('.counter').innerText++;             
            });
    });        
});