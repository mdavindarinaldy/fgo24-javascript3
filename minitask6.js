const url = "https://jsonplaceholder.typicode.com/users"

fetch(url).then(res => {
    return res.json() 
}).then(data => {
    let listEmail = []
    data.forEach(item=> {
        let email = item.email
        let lcEmail = email.toLowerCase()
        listEmail.push(lcEmail)
    })
    console.log(listEmail)
})