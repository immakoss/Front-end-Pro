// ДЗ 37. httpGet. use XMLHttpRequest with promise
// Создать функцию httpGet. Внутри функции нужно использовать XMLHttpRequest для отправки и получения данных.
//  Реализовать логику с помощью промисов.
// *также добавить возможность передавать в функцию method, 
// body - чтобы была возможность использовать не только GET, а также другие методы POST, PUT, DELETE.

function httpGet({url, method, body, headers}){
    return new Promise((resolve, reject)=>{
        let regExp = /2../

        let xhr = new XMLHttpRequest();

        xhr.open(method, url);

        xhr.setRequestHeader(headers.head, headers.body)

        xhr.send(JSON.stringify(body));

        xhr.onload = function() {
        if (!String(xhr.status).match(regExp)) {
            reject(`Ошибка ${xhr.status}: ${xhr.statusText}`);
        } else {
            resolve(xhr.response);
        }
        };

        xhr.onerror = function() {
        reject("Запрос не удался");
        };
    })
}

httpGet({
    url:"https://jsonplaceholder.typicode.com/posts",
    method: 'GET',
    body: {},
    headers: {},
})
  .then(
    function (response) {
      console.log(`Resolve: ${response}`)
    },
    function (error) {
      console.log(`Reject: ${error}`)
    }
  );