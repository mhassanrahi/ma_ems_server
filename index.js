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
const payRoleRoutes = require('./routes/payRoleRoutes')

app.use('/api/employees', employeeRoutes)
app.use('/api/payroles', payRoleRoutes)




const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`Up and running on port ${port}`)
})