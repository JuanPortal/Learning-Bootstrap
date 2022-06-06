const userList = async () => {
    const users = await fetch("https://jsonplaceholder.typicode.com/users")
                    .then(response => response.json())

    let tableBody = ``

    users.forEach(user => {
        tableBody += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.website}</td>
        </tr>`
    })

    document.getElementById("tableBody").innerHTML = tableBody
}

window.addEventListener("load", () => {
    console.log("Hello, world!");
})

userList()