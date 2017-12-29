document.addEventListener("DOMContentLoaded", 
    function() {
        var div = document.getElementById('bubblingButtons');
        console.log(div);

        div.addEventListener("click", 
            function(event) {
                if(event.target.dataset.counter != undefined){
                    event.target.dataset.counter++;
                }
        });
});