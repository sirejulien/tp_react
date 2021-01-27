var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
})

var userModel = mongoose.model('User',userSchema)
module.exports = userModel