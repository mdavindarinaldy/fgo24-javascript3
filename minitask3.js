const animal = "ayam,bebek,sapi,unta"
// chaining built-in method

console.log(animal.split(",").toSpliced(2,1,"domba").join()) // ayam,bebek,domba,unta