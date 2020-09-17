const connection = require('../connection')


const Attendance = (attendance) => {
    employee_id = attendance.employee_id
    attendance_day = attendance.attendance_day
    attendance_status = attendance.attendance_status
}

Attendance.getDailyAttendance = (day, result) => {
    sql = `SELECT attendance_status as status,
            count(attendance_status) as count
            FROM tbl_attendance
            WHERE attendance_day = ?
            GROUP BY attendance_status`
    connection.query(sql, day, (err, data) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        result(null, data)
    })
}

module.exports = Attendance
