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

for (let i = 0; i < person.length; i++) {
    queue(person[i].name, person[i].time).then(function(result){
        console.log(result)
    }).catch(function(err){
        console.log(err)
    })
}

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

//console.time
//console.timeend???