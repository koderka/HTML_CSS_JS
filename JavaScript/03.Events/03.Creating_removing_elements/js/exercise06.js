document.addEventListener("DOMContentLoaded", 
function () {
    var buttons = document.querySelectorAll('.moveBtn');
    var list1 = document.querySelector('#list1');
    var list2 = document.querySelector('#list2');
    
    for(var	i = 0; i < buttons.length; i++)	{
        buttons[i].addEventListener("click", function()	{
            var li = this.parentElement;
            if(li.parentElement == list1) {
                list2.appendChild(li);
            }
            else {
                list1.appendChild(li);
            }
        });
    };
});