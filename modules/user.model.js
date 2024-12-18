const mongoose = require('mongoose');
const validator = require('validator');
const userRoles = require('../utils/rules.user');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,  
        unique: true,
        validate: [ validator.isEmail, 'filed must ba a valid email add']
    },
    password: {
        type: String,
        required: true
    },
    token: {
        type: String
    },
    role: {
        typr: String,
        enum: [userRoles.USER, userRoles.ADMIN, userRoles.MANAGER],
        default: userRoles.USER,
    },
    avatar: {
        type: String,
        default: 'uploads/profile.jpg'
    }

})


module.exports = mongoose.model('User',userSchema);