const express = require('express')
const app = express()
const cors = require('cors')


// Middlewares
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))
app.use(cors())

// Import routes
const employeeRoutes = require('./routes/employeeRoutes')
const departmentRoutes = require('./routes/departmentRoutes')
const attendanceRoutes = require('./routes/attendanceRoutes')

app.use('/employees', employeeRoutes)
app.use('/departments', departmentRoutes)
app.use('/attendance', attendanceRoutes)



const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`Up and running on port ${port}`)
})