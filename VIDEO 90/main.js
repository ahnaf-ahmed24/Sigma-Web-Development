
const express = require('express')
const app = express()
const port = 3000
const blog = require('./routes/blog')
const fs = require("fs")

// app.use(express.static("public"))
app.use('/blog', blog)


//Middlerware 1 - Logger for our application 

app.use((req, res, next) => {
    console.log(req.headers)
    req.ahnaf = 56;
    fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
    console.log()
    // res.send("hacked by Middlwwaer 1")
    next()
})


//Middleware 2

app.use((req, res, next) => {
    console.log('M2')
    next()
})


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.ahnaf)
})

app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
