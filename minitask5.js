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

queue("John",1500).then(function(result){
    console.log(result)
    queue("Ed",2000).then(function(result){
        console.log(result)
        queue("Jane",500).then(function(result){
            console.log(result)
        }).catch(function(result){
            console.log(result)
        })
    }).catch(function(result){
        console.log(result)
    })
}).catch(function(result){
    console.log(result)
})