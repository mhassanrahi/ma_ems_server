const express = require('express')
const router = express.Router()

const {getDailyAttendance} = require('../controllers/attendanceController')

router.get('/:day/', getDailyAttendance)

module.exports = router
