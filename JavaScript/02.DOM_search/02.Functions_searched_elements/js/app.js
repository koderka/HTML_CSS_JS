document.addEventListener("DOMContentLoaded", function(){
   
    // exercise1    
    var homeElement = document.getElementById("home");
    console.log(homeElement);
    var id = homeElement.id;
    var className = homeElement.className;
    console.log('id:', id);
    console.log('class name:', className);
    homeElement.id = className;
    homeElement.className = id;

    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    // exercise2
    function showElements(array) {
        for(var i = 0; i < array.length; i++) {
            console.log(array[i].tagName, array[i].innerHTML, array[i]);
        }
    }
    
    showElements(childElements);
    console.log(banner.tagName);
    showElements(blocks);
    showElements(links);
    
    // exercise3

    function showInnerHTML(array) {
        for(var i = 0; i < array.length; i++) {
            console.log(array[i].innerHTML);
        }
    }
    showInnerHTML(blocks);

    function showOuterHTML(array) {
        for(var i = 0; i < array.length; i++) {
            console.log(array[i].outerHTML);
        }
    }
    showOuterHTML(blocks);

    for(var i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = 'Nowa wartość diva o klasie blocks';
    }
    showInnerHTML(blocks);

    // exercise4

    for(var i = 0; i < childElements.length; i++) {
        console.log(childElements[i].tagName);
    }

    // exercise5

    for(var i = 0; i < links.length; i++) {
        console.log(links[i].dataset);
    }

    // exercise6

    var clList = banner.classList;
    var clName = banner.className;

    console.log(clList);
    console.log(clName);

    console.log(typeof clList);
    console.log(typeof clName);
});
