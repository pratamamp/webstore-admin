const router = require('express').Router()

router.get('/admin', function(request, response) {
    response.send('Dashboard')
})

module.exports = router