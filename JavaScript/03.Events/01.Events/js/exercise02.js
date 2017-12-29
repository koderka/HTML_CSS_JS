document.addEventListener("DOMContentLoaded", 
    function() {
        var buttons = document.getElementsByTagName('button');
        console.log(buttons);
        
        for(var	i = 0; i < buttons.length; i++)	{
            buttons[i].addEventListener("click", function(event) {
                var nextEl = this.nextElementSibling;
                var counter = nextEl.querySelector('.counter');
                console.log(counter);
                
                if(event.target.dataset.counter != undefined){
                    event.target.dataset.counter++;
                    counter.innerText = event.target.dataset.counter;
                }
                else {
                    event.target.dataset.counter = 0;
                    counter.innerText = event.target.dataset.counter;
                }
            });
        }
});
