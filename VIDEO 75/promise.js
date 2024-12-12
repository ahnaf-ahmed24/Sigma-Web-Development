// console.log('This is promises');

// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a < 0.5){
//         reject("No Random number was not supporting you")
//     }
//     else{
//         setTimeout(()=>{
//             console.log('Yes I am Done');
//             resolve("Ahnaf")
//         }, 3000);
//     }
// })


// prom1.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })




// console.log('This is promises');

// let prom1 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a < 0.5){
//         reject("No random number was not supporting you 1")
//     }
//     else{
//         setTimeout(() => {
//             console.log('Yes I am Done');
//             resolve("Ahnaf")
//         }, 3000);
//     }
// })

// let prom2 = new Promise((resolve, reject)=>{
//     let a = Math.random();
//     if(a < 0.5){
//         reject("No random number was not supporting you 2")
//     }
//     else{
//         setTimeout(() => {
//             console.log('Yes I am Done 2');
//             resolve("Ahnaf 2")
//         }, 3000);
//     }
// })

// let p3 = Promise.all([prom1, prom2])
// p3.then((a)=>{
//     console.log(a);
// }).catch((err)=>{
//     console.log(err);
// })




console.log('This is promises 0');

let prom1 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you 1")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 1');
            resolve("Ahnaf 1")
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you 2")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 2');
            resolve("Ahnaf 2")
        }, 1000);
    }
})

let prom3 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you 3")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 3');
            resolve("Ahnaf 3")
        }, 1000);
    }
})

let prom4 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you 4")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 4');
            resolve("Ahnaf 4")
        }, 1000);
    }
})

let prom5 = new Promise((resolve, reject)=>{
    let a = Math.random();
    if(a < 0.5){
        reject("No random number was not supporting you 5")
    }
    else{
        setTimeout(() => {
            console.log('Yes I am Done 5');
            resolve("Ahnaf 5")
        }, 1000);
    }
})

let p6 = Promise.all([prom1, prom2, prom3, prom4, prom5])
p6.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
})

