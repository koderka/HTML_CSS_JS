document.addEventListener("DOMContentLoaded", 
    function () {
        var divs = document.querySelectorAll('.listContainer');
        divs.forEach(function(div){
            div.addEventListener("mouseover", function() {
                var ul = this.firstElementChild;
                ul.firstElementChild.style.backgroundColor = 'red';
                ul.lastElementChild.style.backgroundColor = 'blue';

                var lis = ul.children;
                console.log(lis);
                for(var i = 1; i < lis.length - 1; i++) {
                    lis[i].style.backgroundColor = 'green';
                }
                this.classList.add("hovered");
            });
        });  
});