console.log("Hello, I am conditional tutorial")

let age = 3;
// let grace = 2;

// age += grace

// console.log(age)
// console.log(age + grace)
// console.log(age - grace)
// console.log(age * grace)
// console.log(age / grace)
// console.log(age ** grace)
// console.log(age % grace)

// if(age+grace>18){
//     console.log("You can Drive");
// }

if (age == 18) {
    console.log("You can Drive");
}

else if (age == 0) {
    console.log("Are You Kidding?")
}

else if (age == 1) {
    console.log("Are You again Kidding?")
}

else {
    console.log("You cannot Drive");
}

let a = 6;
let b = 8;

let c = a > b ? (a - b) : (b - a);

console.log(c)

/*
translates to:
if(a>b){
    let c = a - b;
}
else {
    let c = a - b;
}
*/