// import fs from "fs/promises"
// import fsn from "fs"
// import path from "path"

// console.log(fs)

// const basepath = "C:\\Users\\LENOVO\\OneDrive\\Documents\\Sigma Web Development Course\\VIDEO 93"

// let files = await fs.readdir(basepath)
// console.log(files)

// let extensions = []
// for (const item of files) {
//     let ext = item.split(".")[1]
//     console.log(ext)
//     if(fsn.existsSync(path.join(basepath, ext))){
//         // Move the file to the directory
//         fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
//     }
//     else{
//         fs.mkdir(ext)
//     }
//     console.log(item)
// }





import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath = "C:\\Users\\LENOVO\\OneDrive\\Documents\\Sigma Web Development Course\\VIDEO 93"

let files = await fs.readdir(basepath)
for (const item of files) {
    console.log("running for ", item)
    let ext = item.split(".")[item.split(".").length - 1]
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {
        if (fsn.existsSync(path.join(basepath, ext))) {
            // Move the file to this directory if its not a js or json file
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
        else {
            fs.mkdir(ext)
            fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
        }
    }
}