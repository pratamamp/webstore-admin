const admin = require('../controllers/admin')
const web = require('../controllers/web')

const router = require('express').Router()

router.get('/', web.index)
router.get('/admin', admin.index)
router.get('/log/in', admin.login)
router.get('/log/out', admin.logout)

module.exports = router