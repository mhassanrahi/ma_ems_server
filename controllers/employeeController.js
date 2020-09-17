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


