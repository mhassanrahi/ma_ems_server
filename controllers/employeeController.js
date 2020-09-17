const Employee = require('../models/employeeModel')

exports.getAllEmployees = (req, res) => {
    Employee.getAllEmployees((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while retrieving employees."
            })
        }

        else res.status(200).send(data)
    })
}

exports.getPayRoleByEmployeeId = (req, res) => {
    employeeId = req.params.employeeId

    Employee.getPayRoleByEmployeeId(employeeId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Payrole not found with employee id: ${employeeId}`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Payrole with employee id: ${employeeId}`
                })
            }
        
        } else res.status(200).send(data)
    })
}

exports.getEmployeesByDepartment = (req, res) => {
    dept_id = req.params.dept_id

    Employee.getEmployeesByDepartment(dept_id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `No employees found with department: ${dept_id}`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving employees with department: ${employeeId}`
                })
            }
        
        } else res.status(200).send(data)
    })
}

exports.getEmployeeDailyAttendance = (req, res) => {
    employeeId = req.params.employeeId
    day = req.params.day;
    Employee.getEmployeeDailyAttendance(employeeId, day, (err, data) => {
        if (err) {
            if (err.code === 404) {
                res.status(404).send({
                    message: `Daily attendance not found with employee id: ${employeeId}`
                })
            } else {
                res.status(500).send({
                    message: `Error retrieving Daily attendance with employee id: ${employeeId}`
                })
            }
        } else res.status(200).send({data})
    })
}

