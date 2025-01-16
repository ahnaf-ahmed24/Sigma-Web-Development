const express = require('express')
const app = express()
const port = 3000


app.use(express.static('public'))


// app.get or app.post or app.put or app.deletee(path,handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})


app.get('/about', (req, res) => {
    res.send('Hello about!')
})


app.get('/contact', (req, res) => {
    res.send('Hello contact!')
})


app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})



app.get('/blog/:slug', (req, res) => {
    // logic to fatch intro to js from the db

     // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
     console.log(req.params) // will output { slug: 'intro-to-padosi' }
     console.log(req.query) // will output { mode: 'dark', region: 'in' }


    console.log(req);
    
    res.send(`Hello ${req.params.slug}`)
})

// app.get('/blog/intro-to-js', (req, res) => {
//     // logic to fatch intro to js from the db
//     res.send('intro-to-js')
// })


// app.get('/intro-to-python', (req, res) => {
//     //logic to fatch intro to python from the db
//     res.send('intro-to-python')
// })


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})