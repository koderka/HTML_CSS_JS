document.addEventListener("DOMContentLoaded", function(){

   // exercise1
   var articleFirst = document.querySelector('article.first');
   console.log(articleFirst);
   
   var allH1 = articleFirst.querySelectorAll('h1');
   console.log(allH1.length);
   
   var allOffers = articleFirst.querySelectorAll('.offers');
   for(var i = 0; i < allOffers.length; i++) {
       console.log(allOffers[i]);
   }

   var allDivs = articleFirst.querySelectorAll('div');
   allDivs.forEach(function(element) {console.log(element)});

   // exercise2
   var exercise2 = document.querySelector("nav > ul > li:nth-child(5) > a");
   console.log(exercise2);

   // exercise3

   var idHome = document.querySelector('#home');
   console.log(idHome);

   var idHome2 = document.getElementById('home');
   console.log(idHome2);

   var liElement = document.querySelector('li:not([data-direction])');
   console.log(liElement);

   var blockElement = document.querySelector('.block');
   console.log(blockElement);

   // exercise4

   var liAll = document.querySelector('nav').querySelectorAll('li');
   console.log(liAll);
   
   var parAll = document.querySelectorAll('div > p');
   console.log(parAll);
   
   var allDivs = document.querySelector('article').querySelectorAll('div');

   console.log(allDivs);
   
   // exercise5
   
   var all = document.querySelector('nav').querySelectorAll('li:not([data-direction])');
   console.log(all);
   all.forEach(function(element) { 
           element.setAttribute("data-direction", "top");
           console.log(element);
   }
    );
});
