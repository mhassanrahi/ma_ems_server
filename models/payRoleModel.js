const connection = require('../connection')

const Payrole = (payrole) => {
    emp_id = payrole.emp_id;
    basic_pay = payrole.basic_pay;
    pay_month = payrole.pay_month;
    overtime_rate = payrole.overtime_rate;
    overtime_hours = payrole.overtime_hours;
    pay_deduction = payrole.pay_deduction;
    gross_pay = payrole.gross_pay;
    net_pay = payrole.net_pay;
}


module.exports = Payrole