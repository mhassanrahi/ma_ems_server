const express = require('express')
const router = express.Router()

// Import Controllers
const { getAllEmployees,
    getPayRoleByEmployeeId,
    getEmployeeDailyAttendance } = require('../controllers/employeeController')

router.get('/', getAllEmployees)
router.get('/:employeeId/payrole', getPayRoleByEmployeeId)
router.get('/attendance/:employeeId/:day', getEmployeeDailyAttendance)

module.exports = router