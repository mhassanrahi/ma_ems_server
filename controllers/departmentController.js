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

exports.getDepartmentById = (req, res) => {
    dept_id = req.params.dept_id
    Department.getDepartmentById(dept_id, (err, data) => {
        if (err) {
                res.status(500).send({
                    message: `Error retrieving Department with Id: ${dept_id}`
                })
        
        } else if (data.length === 0){
            res.status(404).send({
                message: ` Department with Id: ${dept_id} not found.`
            })
        }
        else res.status(200).send(data)

    })
}