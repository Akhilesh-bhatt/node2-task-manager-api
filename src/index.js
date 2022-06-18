const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

const port = process.env.PORT

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a word document!'))
        }
        cb(undefined, true)
    }
})

app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ Error: error.message})
})

app.listen(port, () => {
    console.log(`Server starts at port ${port}`);
})




















































// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('62aadb99d468f04431b6cee1')
//     // await task.populate('owner')
//     // console.log(task.owner)

//     // const user = await User.findById('62aadadcd468f04431b6cedc')
//     // await user.populate('tasks')
//     // console.log(user.tasks)
// }

// main()






// const pet = {
//     name: 'meera'
// }

// pet.toJSON = function () {
//     console.log(this)

//     return {
//         age: 10
//     }
// }

// console.log(JSON.stringify(pet))


// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abcdefgh'}, 'csrlchangedmyfuture', { expiresIn: '7 day' })
//     console.log(token)

//     const data = jwt.verify(token, 'csrlchangedmyfuture')
//     console.log(data)
// }

// myFunction()