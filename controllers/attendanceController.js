const Attendance = require('../models/attendanceModel')

exports.getDailyAttendance = (req, res) => {
    const day = req.params.day

    Attendance.getDailyAttendance(day, (err, data) => {
        if (err) {
                res.status(500).send({
                    message: `Error retrieving Attendace of day: ${day}`
                })
        
        } else if (data.length === 0){
            res.status(404).send({
                message: `Attendace of day: ${day} not found.`
            })
        }
        else res.status(200).send(data)

    })

}