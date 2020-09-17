const express = require('express')
const router = express.Router()

// Import Controllers
const {getAllEmployees} = require('../controllers/employeeController')

router.get('/', getAllEmployees)


module.exports = router