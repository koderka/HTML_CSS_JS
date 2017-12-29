document.addEventListener("DOMContentLoaded", 
    function() {

        var divs = document.querySelectorAll(".box");
        console.log(divs);

        divs.forEach(function(div){
            div.addEventListener("click",
                function(){
                    div.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);         
                });
        });     
});