let square = document.querySelector('.square');
let endPoint = document.documentElement.clientWidth - 100;

square.addEventListener('click', function(){
    let timer = setInterval(function(){
        if(Number(square.style.left) === endPoint){
            clearInterval(timer)
        } else {
            square.style.left += 1 + 'px'
        }
    },50)
})