const express = require('express');
const { createFee, getFeesByStudent, updateFeeStatus } = require('../controllers/feeController');
const router = express.Router();

router.post('/', createFee);
router.get('/:studentId', getFeesByStudent);
router.put('/:feeId', updateFeeStatus);

module.exports = router;
