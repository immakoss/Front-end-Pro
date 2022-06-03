let square = document.querySelector('.square');
let endPoint = document.documentElement.clientWidth - 100;
let position = 0;

square.addEventListener('click', function(){

    let movement = setInterval(function() {
        position++
        square.style.left = position + 'px'
        if(position === endPoint) clearInterval(movement)

    },1)
})