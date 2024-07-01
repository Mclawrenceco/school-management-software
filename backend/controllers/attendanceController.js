const Attendance = require('../models/Attendance');
const Student = require('../models/Student');

exports.markAttendance = async (req, res) => {
    const { studentId, date, status } = req.body;

    try {
        let attendance = await Attendance.create({ studentId, date, status });
        res.json(attendance);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAttendanceByStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const attendance = await Attendance.findAll({ where: { studentId } });
        res.json(attendance);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
