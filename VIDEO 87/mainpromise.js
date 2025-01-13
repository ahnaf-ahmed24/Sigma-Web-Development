import fs from "fs/promises"

let a = await fs.readFile("ahnaf.txt")

let b = await fs.writeFile("ahnaf.txt", "\nthis is amazing promise")

console.log(a.toString());
