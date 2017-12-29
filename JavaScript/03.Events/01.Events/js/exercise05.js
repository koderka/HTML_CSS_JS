
document.addEventListener("DOMContentLoaded", 
    function() {
        
        var div = document.querySelector('div');
        var globalX = document.getElementById("globalX");
        var globalY = document.getElementById("globalY");
        var localX = document.getElementById("localX");
        var localY = document.getElementById("localY");
        
        
        div.addEventListener("mousemove", 
        function(event) {
            localX.innerText = event.clientX - div.offsetLeft;
            localY.innerText = event.clientY - div.offsetTop;
            globalX.innerText = event.screenX;
            globalY.innerText = event.screenY;
        });
});