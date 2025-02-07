use("CrudDb")

// Cerate
db.createCollection("courses")

// db.courses.insertOne({
//     name: "Ahnaf's Web Dev free course",
//     price: 0,
//     assignments: 12,
//     project: 45
// })

// db.courses.insertMany([
//         {
//             "name": "Ahnaf's Web Dev free course",
//             "price": 0,
//             "assignments": 12,
//             "project": 45
//         },
//         {
//             "name": "Complete JavaScript Mastery",
//             "price": 20,
//             "assignments": 15,
//             "project": 30
//         },
//         {
//             "name": "Python for Beginners",
//             "price": 0,
//             "assignments": 10,
//             "project": 20
//         },
//         {
//             "name": "React.js Frontend Bootcamp",
//             "price": 50,
//             "assignments": 18,
//             "project": 25
//         },
//         {
//             "name": "Node.js Backend Development",
//             "price": 40,
//             "assignments": 22,
//             "project": 35
//         },
//         {
//             "name": "Full Stack Web Development",
//             "price": 100,
//             "assignments": 25,
//             "project": 50
//         },
//         {
//             "name": "Data Science with Python",
//             "price": 75,
//             "assignments": 20,
//             "project": 40
//         },
//         {
//             "name": "Machine Learning A-Z",
//             "price": 120,
//             "assignments": 30,
//             "project": 60
//         },
//         {
//             "name": "Cyber Security Fundamentals",
//             "price": 90,
//             "assignments": 12,
//             "project": 25
//         },
//         {
//             "name": "UI/UX Design with Figma",
//             "price": 35,
//             "assignments": 8,
//             "project": 15
//         }
//     ]    
// )


// //Read

// let a = db.courses.find({price: 0})
// console.log(a)

// console.log(a.toArray())


// let b = db.courses.findOne({price: 0})
// console.log(b)

//Update
db.courses.updateOne({price: 0}, {$set:{price: 100}})

db.courses.updateMany({price: 0}, {$set:{price: 1000}})


//Delete

db.courses.deleteOne({price: 100})
db.courses.deleteMany({price: 1000})

