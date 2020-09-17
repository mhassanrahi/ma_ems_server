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
    employeeId = req.params.employeeId;

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

