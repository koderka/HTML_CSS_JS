document.addEventListener("DOMContentLoaded", 
function () {
    var button = document.querySelector('#remove');
    var list = document.querySelector('.list');

    button.addEventListener("click", 
        function() {
            while(list.children.length != 0) {
                var li = list.querySelector('li');
                list.removeChild(li);
            }
    });
});