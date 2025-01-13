const fs = require("fs")

console.log("Starting");
// fs.writeFileSync("Ahnaf.text", "Ahnaf is a good boy")
fs.writeFile("ahnaf.txt", "Ahnaf is a good boy", ()=>{
    console.log("Done");
    fs.readFile("ahnaf.txt", (error,data)=>{
        console.log(error,data.toString());      
    })
})
fs.appendFile("ahnaf.txt", "ahnafrobo", (e, d)=>{
    console.log(d)
    
})
console.log("ending");


