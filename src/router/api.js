const express = require('express')
const Log = require('../controle/apiControle')
const router = express.Router()


router.post('/registro', Log.registro)
router.post('/login', Log.login)





module.exports = router





