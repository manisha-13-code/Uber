const express = require('express')
const router = express.Router()
const { body } = require('express-validator')

router.post('/create', 
    body('userId').isString
)