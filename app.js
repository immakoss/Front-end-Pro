let title = document.getElementById('title');
let userInfo = document.getElementById('bodytext');
let userId = document.getElementById('users')
let submitBtn = document.getElementById('submit')
let userCards = document.querySelector('.usercards');
let noUsers = document.querySelector('.nousers')

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    if(title.value === '' && userInfo.value === '') {
        alert('Error! All fields are required!')
    }

    if(title.value === '') {
        title.classList.add('error');
        setTimeout(()=>title.classList.remove('error'),1000)
    }

    if(userInfo.value === '') {
        userInfo.classList.add('error');
        setTimeout(()=>userInfo.classList.remove('error'),1000)
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: title.value,
    body: userInfo.value,
    userId: userId.value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    let cards = document.createElement('div')
    cards.innerHTML = renderCards(json)
    userCards.appendChild(cards)
    noUsers.innerHTML = 'Users:';
    console.log(json)
  });
})

let renderCards = function(data) {
    return `<div class="card">
    <span>User Id: ${data.userId}</span>
    <span>User name: ${data.title}</span>
    <span>About: ${data.body}</span>
</div>`
}