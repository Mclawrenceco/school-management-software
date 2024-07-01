const Timetable = require('../models/Timetable');

exports.createTimetable = async (req, res) => {
    const { classId, day, period, subject, teacher } = req.body;

    try {
        let timetable = await Timetable.create({ classId, day, period, subject, teacher });
        res.json(timetable);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getTimetableByClass = async (req, res) => {
    const { classId } = req.params;

    try {
        const timetable = await Timetable.findAll({ where: { classId } });
        res.json(timetable);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
