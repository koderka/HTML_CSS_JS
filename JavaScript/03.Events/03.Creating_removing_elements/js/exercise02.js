document.addEventListener("DOMContentLoaded", 
function () {
    var button = document.querySelector('.button');
    var list = document.querySelector('.menu');
    
    button.addEventListener("click", function(){
        var length = list.children.length;
        var newLi = document.createElement('li');
        // newLi.innerText = 'Element ' + (length + 1) + '- w chwili dodania było ' + length + ' elementów';
        newLi.innerText = `Element ${length + 1} - w chwili dodania było ${length} elementów`;
        list.appendChild(newLi);
    })
});