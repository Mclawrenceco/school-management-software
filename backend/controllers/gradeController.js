const Grade = require('../models/Grade');

exports.recordGrade = async (req, res) => {
    const { studentId, classId, assessment, grade } = req.body;

    try {
        let gradeRecord = await Grade.create({ studentId, classId, assessment, grade });
        res.json(gradeRecord);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getGradesByStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const grades = await Grade.findAll({ where: { studentId } });
        res.json(grades);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
