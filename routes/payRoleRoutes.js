const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('Payrole endpoint hit')
})


module.exports = router