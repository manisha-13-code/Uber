const mongoose = require('mongoose');

const captain = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String, 
            required: true,
            minLength: [3, 'First name must be at least 3 characters long'],
        },
        lastname: {
            type: String,
            minLength: [3, 'Last name must be at least 3 characters long'],
        }
    },

    email: {
        type: String,
        required: true,
        unique: true,
        minLength: [5, 'Email must be at least 5 characters long'],
    },

    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId: {
        type: String,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active'
    },

    vehicle: {
       color: {
              type: String,
              required: true,
              minLength: [3, 'Color must be at least 3 characters long'],
       },
       plate: {
        type: String,
        required: true,
        minLength: [3, 'Color must be at least 3 characters long'],
       }
    }
})