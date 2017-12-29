$(function(){
    // spinner
    var spinner = $('#spinnerValue');
    var button1 = $('.btn.btn-primary.btn-xs').eq(0);
    var button2 = $('.btn.btn-primary.btn-xs').eq(1);
    
    var min = $('#min');
    var max = $('#max');
    var step = $('#step');

    var value = spinner.attr('value');
    
    button1.on("click", function(){
        if((parseInt(value) + parseInt(step.val())) <= max.val()) {
            value = parseInt(value) + parseInt(step.val());
            spinner.attr('value', value);
        }
    });
    
    // setting min, max step
    button2.on("click", function(){
        if(value - step.val() >= min.val()) {
            value = value - step.val();
            spinner.attr('value', value);
        }
    });
    

    min.on("change", function(){
        min.attr('value', min.val());
    });

    max.on("change", function(){
        max.attr('value', max.val());
    });

    step.on("change", function(){
        step.attr('value', step.val());
    });

    // progress bar
    var save = $('.saveSettings');

    save.on("click", function changeProgress() {
        var progress = $('div.progressInner');
        console.log("in");
        var percent = 100 * value/(max.val() - min.val()) + '%';
        console.log(percent);
        
        progress.css({'width': percent});
    });
    
});
