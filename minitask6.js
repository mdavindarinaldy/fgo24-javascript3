const url = "https://jsonplaceholder.typicode.com/users"

async function fetching(url) {
    try {
        const result = await fetch(url) // promise
        const data = await result.json()
        // let listEmail = []
        // data.forEach(item => {
        //     let email = item.email
        //     let lcEmail = email.toLowerCase()
        //     listEmail.push(lcEmail)
        // })
        let listEmail = data.map(item => item.email.toLowerCase())
        console.log(listEmail)
    } catch(err) {
        console.log(err)
    }
}

fetch(url).then(res => {
    return res.json() 
}).then(data => {
    // let listEmail = []
    // data.forEach(item => {
    //     let email = item.email
    //     let lcEmail = email.toLowerCase()
    //     listEmail.push(lcEmail)
    // })
    // console.log(listEmail)
    console.log(data.map(item => item.email.toLowerCase()))
})

// Manual

fetch(url).then(res => {
    return res.json() 
}).then(data => {
    let listEmail = []
    for (let a = 0; a<data.length; a++) {
        listEmail = [...listEmail, data[a].email]
    }
    lowerCase(listEmail)
})

function lowerCase(data) {
    const capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P",'Q','R','S','T','U','V','W','X','Y','Z']
    const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",'q','r','s','t','u','v','w','x','y','z']
    let newData = []
    for(let i = 0; i<data.length; i++) {
        let temp = ""
        for (let j = 0; j<data[i].length; j++) {
            for(let x = 0; x<capital.length; x++) {
                if(data[i][j] == capital[x]) {
                    temp += lowercase[x]
                }
            }
            for (let y = 0; y<lowercase.length; y++) {
                if(data[i][j] == lowercase[y]) {
                    temp += lowercase[y]
                }
            }
        }
        newData[i] = temp
    }
    console.log(newData)
}
