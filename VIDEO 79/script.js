let a = prompt("Enter first number :- ")
let b = prompt("Enter second number :- ")

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)


function main(){
    
try {
    console.log("The Suym is ", sum) 
    return true
} catch (error) {
    console.log("Error")
    return false
}
finally{
    console.log("Files are being closed and db connection is being closed")
}

}
