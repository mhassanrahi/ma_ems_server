const connection = require('../connection')

const Employee = ({employee}) => {
    emp_name = name;
    emp_dept = dept;
    emp_role = role;
    emp_dob = dob;
    emp_doj = doj;
    emp_email = email;
    emp_city = city;
    emp_address = address;
    emp_contact = contact;
}

Employee.getAllEmployees = result => {
    sql = `SELECT e.emp_name,
    d.dept_name,
    jr.job_role_name,
    pr.net_pay as salary,
    e.emp_dob,
    e.emp_doj,
    e.emp_email,
    e.emp_city,
    e.emp_contact
    FROM tbl_employees e
    LEFT JOIN tbl_depts d
    ON e.emp_dept = d.dept_id
    LEFT JOIN tbl_job_roles jr
    ON e.emp_role = jr.job_role_id
    LEFT JOIN tbl_pay_roles pr
    ON e.emp_id = pr.emp_id `

    connection.query(sql, (err, res) => {
        if (err) {
            console.log("Error: ", err);
            result(null, err);
            return;
        }

        result(null, res)
    })
}




module.exports = Employee