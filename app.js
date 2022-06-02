let square = document.querySelector('.square');

function squarePath(){
    square.style.transform = "translateX(1px)"
}


square.addEventListener('click', function(){
    let viewWidth = document.documentElement.clientHeight - 100;
    if(a){
        squarePath()
    } else {
        clearInterval()
    }
})