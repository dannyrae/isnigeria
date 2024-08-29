const router = require('express').Router()
const { signup, loginUser} = require('../controllers/auth.controller')
const upload = require('../multer')

router.post('/signup', upload.single('portfolio'), signup)

// router.post('/signup', signup) //Without the cloudinary

router.post('/login', loginUser)

module.exports = router