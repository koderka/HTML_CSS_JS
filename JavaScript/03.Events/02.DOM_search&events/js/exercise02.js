document.addEventListener("DOMContentLoaded", 
function () {
    var buttons = document.querySelectorAll('.button');
    console.log(buttons);

    buttons.forEach(function(button){
        button.addEventListener("click", function(){
            this.nextElementSibling.classList.toggle("hidden");
        })
    }) 
});