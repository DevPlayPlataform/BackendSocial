const express = require('express')
const router = express.Router()

const postController = require('../controllers/postsController')

router.post('/', postController.create)
router.put('/', postController.edit)
router.delete('/', postController.delete)

module.exports = router