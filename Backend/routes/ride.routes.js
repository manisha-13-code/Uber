const express = require('express')
const router = express.Router()
const { body } = require('express-validator')
const rideController = require('../controllers/ride.controller')

router.post('/create', 
    body('userId').isString().isLength({ min: 24, max: 24 }).withMessage('Invalid user id'),
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Invalid vehicle type'),
    rideController.createRide
)

module.exports = router;