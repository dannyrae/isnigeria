const router = require('express').Router()
const { signup, loginUser} = require('../controllers/auth.controller')
const upload = require('../utils/cloudinary')

// router.post('/signup', upload.single('pdf'), signup)

router.post('/signup', signup) //Without the cloudinary

router.post('/login', loginUser)

module.exports = router