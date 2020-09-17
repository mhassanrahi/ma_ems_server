const express = require('express')
const router = express.Router()

// Import Controllers
const {getAllEmployees, getPayRoleByEmployeeId} = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:employeeId/payrole', getPayRoleByEmployeeId)

module.exports = router