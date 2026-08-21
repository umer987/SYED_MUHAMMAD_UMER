const mongoose = require('mongoose')

const adminschema = new mongoose.Schema({
    email:String,
    name:String,
     password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be at least 8 characters'],
    maxlength: [100, 'Password cannot exceed 100 characters']
} 
})
