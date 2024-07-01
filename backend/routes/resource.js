const express = require('express');
const { uploadResource, getResources } = require('../controllers/resourceController');
const router = express.Router();

router.post('/', uploadResource);
router.get('/', getResources);

module.exports = router;
