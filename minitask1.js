const elements = ["Nasi Goreng", "Mie Goreng", "Nasi Padang"]

// Built-in Method: join()

console.log(elements.join(", "))

// Manual

let temp = ""
for (let i=0; i<elements.length; i++) {
    temp += elements[i]
    if (i!==elements.length-1) { temp += ", " }
}
console.log(temp)