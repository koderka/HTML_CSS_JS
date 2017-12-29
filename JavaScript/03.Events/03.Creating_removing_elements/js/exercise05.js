document.addEventListener("DOMContentLoaded", 
function () {
    var buttons = document.querySelectorAll(".deleteBtn");
    
    for(var	i = 0; i < buttons.length; i++)	{
        buttons[i].addEventListener("click", function()	{
            var tr = this.parentElement.parentElement;
            var trParent = tr.parentElement;
            trParent.removeChild(tr);
        });
    };
});