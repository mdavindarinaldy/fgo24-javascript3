const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function palindrome(text) {
    let newText = text.split("").toReversed().join("")
    if (text == newText ) {console.log("Palindrome")}
    else {console.log("Bukan Palindrome")}
}

function reverseWord(text) {
    let newText = text.split(" ").toReversed().join(" ")
    console.log(newText)
}

rl.question("Masukkan kata yang akan dicek palindrome: ", function(text) {
    palindrome(text)
    rl.question("Masukkan kata yang akan dibalik: ", function(text) {
        reverseWord(text)
        rl.close()
    } )
} )