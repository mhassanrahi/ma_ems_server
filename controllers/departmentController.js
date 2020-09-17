const Department = require('../models/departmentModel')


exports.getAllDepartments = (req, res) => {
    Department.getAllDepartments((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while retrieving Departments."
            })
        }

        else res.status(200).send(data)
    })
}