const connection = require('../connection')

const Department = ({department}) => {
    dept_name = name;
}

Department.getAllDepartments = result => {
    sql = 'SELECT * FROM tbl_depts'

    connection.query(sql, (err, data) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        result(null, data)
    })
}

Department.getDepartmentById = (dept_id, result) => {
    sql = 'SELECT * FROM tbl_depts WHERE dept_id = ?'

    connection.query(sql, dept_id, (err, data) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        result(null, data)
    })
}

module.exports = Department