const person = [ { 
        name: "John",
        time: 1500
    }, {
        name: "Ed",
        time: 2000
    }, {
        name: "Jane",
        time: 500
    } ]

function queue(name, time) {
    return new Promise((resolve, reject)=>{
        if(time < 0 || time == undefined) {
            reject("gagal")
        } else {
            setTimeout(()=>{
                resolve(name)
            },time)
        }     
    })
}

// then-catch

// queue("John",1500).then(function(result){
//     console.log(result)
//     queue("Ed",2000).then(function(result){
//         console.log(result)
//         queue("Jane",500).then(function(result){
//             console.log(result)
//         }).catch(function(result){
//             console.log(result)
//         })
//     }).catch(function(result){
//         console.log(result)
//     })
// }).catch(function(result){
//     console.log(result)
// })

// async-await

async function handling(name, time) {
    try {
        const result = await queue(name, time)
        console.log(result)
    } catch(err) {
        console.log(err)
    }
}

async function loopHandling() {
    for (let i = 0; i < person.length; i++) {
        let result = await handling(person[i].name, person[i].time)
    }
}

// async function handling2(name, time) {
//     try {
//         const results = await Promise.allSettled([
//             queue("John", 2000),
//             queue("Ed", 1500),
//             queue("Jane", 500),
//         ])
//         // results.forEach(result => {
//         //     console.log(result.name)
//         // });
//         console.log(results)
//     } catch(err) {
//         console.log(err)
//     }
// }

loopHandling()
//handling2()