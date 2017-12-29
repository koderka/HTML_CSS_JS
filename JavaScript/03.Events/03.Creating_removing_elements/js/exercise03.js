document.addEventListener("DOMContentLoaded", 
function () {
    
    var button = document.querySelector('#remove');
    var buttonParent = button.parentElement;

    button.addEventListener("click", 
        function(event) {
            buttonParent.removeChild(button);
    });
});