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

app.use('/api/employees', employeeRoutes)



const port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log(`Up and running on port ${port}`)
})