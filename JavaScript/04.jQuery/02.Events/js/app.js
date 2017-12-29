$(function(){
    
    // exercise 1

    var buttons = $('.hero-buttons').find('button');
    var ironMan = buttons.eq(0);
    var thor = buttons.eq(1);
    var wolverine = buttons.eq(2);
    
    ironMan.on("click", function(){
        console.log('Kliknięto mnie');
    });
    
    thor.one("click", function(){
        console.log('Kliknięto mnie, ale już drugi raz nie dam się kliknąć');
    });

    wolverine.one("click", function(){
            buttons.off();
    });

    // exercise 2

    var description = $('.superhero-description');
    console.log(description);

    var dd = description.find('dd');
    console.log(dd);
    
    dd.css("display", "none");
    
    var dt = description.find('dt');
    console.log(dt);

    dt.on("click", function(){
        if(dd.css('display') == 'none') {
            dd.css("display", "block");
        }
        else if(dd.css('display') == 'block'){
            dd.css("display", "none");
        }
    });

    // exercise 3

    var form = $('form.login');
    console.log(form);
    var button = form.find('button.show-hide-btn');
    console.log(button);
    var input = form.find('input.user-pass');
    console.log(input);

    button.on("click", function(event){

        if(input.attr('type') == 'text') {
            input.attr('type', 'password');
            console.log(input.attr('type'));
        }
        else if(input.attr('type') == 'password') {
            input.attr('type', 'text');
            console.log(input.attr('type'));
        }
        event.preventDefault();
    });

    // exercise 4

    var menuEl = $('.menu').find('a');
    menuEl.on("mouseenter", function(){
        console.log("Hura");
    })
    
    // exercise 5
    
    var inputs = form.find('input');
    console.log(inputs);
    

    inputs.on("click", function(){
        inputs.css("boxShadow", "5px 5px");
        inputs.css("backgroundColor", "green");
    });
    
    inputs.on("mouseleave", function(){
        inputs.css("backgroundColor", "grey");
    });

});
