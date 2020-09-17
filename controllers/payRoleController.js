const Payroll = require('../models/payRoleModel')

exports.getPayRoleByEmployeeId = (req, res) => {
    Payroll.getPayRoleByEmployeeId((err, data) => {
        if (err) {
            res.status(500).send({
                message: err.message || "Error occured while retrieving employees."
            })
        }

        else res.status(200).send(data)
    })
}