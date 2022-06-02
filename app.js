$.ajax({
    method: "GET",
    url: "https://jsonplaceholder.typicode.com/users"
}).done(function(data){
    renderUsers(data)
})

let $users = ''

function renderUsers($users){
    $('.table').append(`<tbody class="tbody"></tbody>`)
    let $tbody = $(".tbody")
    console.log($tbody  )
    $($users).each(function () {
        $tbody.append(`
        <tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.username}</td>
        <td>${this.email}</td>
        <td>${this.phone}</td>
        <td>${this.website}</td>
        </tr>
        `)
    });
}