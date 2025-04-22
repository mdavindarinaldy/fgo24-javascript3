const url = "https://jsonplaceholder.typicode.com/users"

async function fetching(url) {
    try {
        const result = await fetch(url) // promise
        const data = await result.json()
        let listEmail = []
        data.forEach(item => {
            let email = item.email
            let lcEmail = email.toLowerCase()
            listEmail.push(lcEmail)
        })
        console.log(listEmail)
    } catch(err) {
        console.log(err)
    }
}

fetch(url).then(res => {
    return res.json() 
}).then(data => {
    let listEmail = []
    data.forEach(item => {
        let email = item.email
        let lcEmail = email.toLowerCase()
        listEmail.push(lcEmail)
    })
    console.log(listEmail)
})

fetching(url)