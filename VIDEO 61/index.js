let random = Math.random()

console.log(random)
let a = prompt("Enter 1st Number :- ")
let c = prompt("Enter operation :- ")
let b = prompt("Enter 2nd Number :- ")

let obj = {
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"**"
}

if (random > 0.1) {
    console.log(`The result is ${a} ${c} ${b}`)
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}

else {
    c = obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}