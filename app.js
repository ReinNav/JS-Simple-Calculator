(function () {

    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    // Push buttons value to screen
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    // calculate result of screen value with equal button
    equal.addEventListener('click', function(e) {
        if(screen.value === '') {
            screen.value = "";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })


    // clear all values on screen
    clear.addEventListener('click', function(e) {
        screen.value = '';
    })


})();