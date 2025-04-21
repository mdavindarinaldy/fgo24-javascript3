const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Built-in Method

function palindrome(text) {
    let newText = text.split("").toReversed().join("")
    if (text == newText ) {console.log("Palindrome")}
    else {console.log("Bukan Palindrome")}
}

function reverseWord(text) {
    let newText = text.split(" ").toReversed().join(" ")
    console.log(newText)
}

// Manual

function palindromeManual(text) {
    let len = text.length
    let newText = ""
    for (let i=len-1; i>=0; i--) {
        newText += text[i]
    }
    if (newText == text) {console.log("Palindrome")}
    else {console.log("Bukan Palindrome")}
}

function reversedManual(text) {
    let newText = ""
    let temp = ""
    for (let i=text.length-1; i>=0; i--) {
        if (text[i] == " ") { 
            newText += temp + " "
            temp = ""
        } else {
            temp = text[i] + temp
        }
    }
    newText += temp
    console.log(newText)
}

rl.question("Masukkan kata yang akan dicek palindrome: ", function(text) {
    palindrome(text)
    rl.question("Masukkan kata yang akan dibalik: ", function(text) {
        reversed(text)
        rl.close()
    } )
} )