document.addEventListener("DOMContentLoaded", 
function () {
    var buttons = document.querySelectorAll('.button');
    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        })
    }) 
});