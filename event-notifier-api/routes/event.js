const express = require('express')
const router = express.Router()

const EventController = require('../controllers/eventController')

router.post('/',EventController.show)
router.get('/list',EventController.list)
router.post('/store',EventController.store)
router.post('/delate',EventController.destroy)
router.post('/update',EventController.update)

module.exports = router