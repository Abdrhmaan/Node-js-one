// Initialize express app
import express from 'express'

import {find, findById, insert, update, remove} from './users/model.js'
const app = express()

app.use(express.json())


// GET ALL USERS
app.get("/users" , async(req,res) => {
   
    const alluser = await find()
    res.json(alluser)
})



// GET USER BY ID
app.get("/users/:id" , async(req,res) => {
   
    const user = await findById(req.params.id)
    if(user) {

        res.json(user)
    } else {
        res.status(401).json({msege : "not found user"})
    }
    
})



// CREATE A NEW USER


app.post("/users/add" , async(req,res) => {
   
    const create = await insert(req.body)
    if(create) {

        res.json(create)
    } else {
        res.status(401).json({msege : "not create user"})
    }
    
})


// UPDATE A USER


app.put("/users//update_user/:id" , async(req,res) => {
   
    const update = await update(req.params.id , req.body)
    if(update) {

        res.json(update)
    } else {
        res.status(401).json({msege : "not updated "})
    }
    
})

app.delete("/users/:id" , async(req,res) => {
   
    const move = await remove(req.params.id)
    if(move) {

        res.json(move)
    } else {
        res.status(401).json({msege : "a dleted user"})
    }
    
})




// DELETE A USER

// export default app
export default app;
