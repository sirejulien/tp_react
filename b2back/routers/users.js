var express = require('express')
var User = require('../models/user')
var router=express.Router()

router.get('/', async function (req,res) {
    try{
        var users= await User.find({})
        res.json(users)
    }catch(e){
        console.log(e)
    }
})

router.post('/', (req,res) => {
    try{
        var user= new User(req.body)
        user.save()
        res.json(user)
    }catch(e){
        console.log(e)
    }  
})
