let str = "good evening"
console.log(str)
console.log(typeof(str))
console.log(str.length)
console.log(str.length-1)


let d = str.charAt(5)
console.log(d)

console.log(str.charCodeAt(11))
console.log(str.concat(" ", "Hello"))
console.log(str.includes("goo"))
console.log(str.indexOf("o"))
console.log(str.lastIndexOf("o"))
console.log(str.trim())
console.log(str.replace("good ", "bad"))
console.log(str.startsWith(" "))
console.log(str.slice(5,8))
console.log(str.slice(5))
console.log(str.split(" "))
console.log(str.substring(3,8))
// difference btw slice and substring


// #type conversion
let stra = ("10");


console.log(typeof(stra))



let firstname = prompt("Enter your name")
let age = prompt("Enter your age")

console.log(firstname)
console.log(age)