const express = require('express');
const { recordGrade, getGradesByStudent } = require('../controllers/gradeController');
const router = express.Router();

router.post('/', recordGrade);
router.get('/:studentId', getGradesByStudent);

module.exports = router;
