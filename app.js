let square = document.querySelector('.square');
let endPoint = document.documentElement.clientWidth - 100;

square.addEventListener('click', function(){
    let timer = setInterval(function(){
        for(let i = 0; i <= endPoint; i++){
            let count = 0;

            if(count === endPoint){
                clearInterval(timer)
            } else {
                square.style.left += 1 +'px'
                count++
            }
        }
    },50)
})