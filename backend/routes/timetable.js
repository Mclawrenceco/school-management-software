const express = require('express');
const { createTimetable, getTimetableByClass } = require('../controllers/timetableController');
const router = express.Router();

router.post('/', createTimetable);
router.get('/:classId', getTimetableByClass);

module.exports = router;
