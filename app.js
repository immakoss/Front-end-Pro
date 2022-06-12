let title = document.getElementById('title');
let userInfo = document.getElementById('bodytext');
let userId = document.getElementById('users')
let submitBtn = document.getElementById('submit')
let userCards = document.querySelector('.nousers')

let data = {
    userId: '',
    title: '',
    body: ''
}

title.addEventListener('keyup', (e)=>{
  if(e.target.value === '') title.classList.toggle('.red')
  data.title = e.target.value

})

userInfo.addEventListener('keyup', (e)=>{
    if(data.body === '')
    data.body = e.target.value
})

userId.addEventListener('blur', (e)=>{
    if(data.userId === '')
    data.userId = e.target.value
})

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()

    fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: data.title,
    body: data.body,
    userId: data.userId,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
})

function renderCards(data){
    return `
    <div class="card">
        <span>${data.userId}</span>
        <span>${data.title}</span>
        <span>${data.body}</span>
    </div>`
}