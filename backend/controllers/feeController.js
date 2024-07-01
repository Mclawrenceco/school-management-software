const Fee = require('../models/Fee');

exports.createFee = async (req, res) => {
    const { studentId, amount, dueDate, status } = req.body;

    try {
        let fee = await Fee.create({ studentId, amount, dueDate, status });
        res.json(fee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getFeesByStudent = async (req, res) => {
    const { studentId } = req.params;

    try {
        const fees = await Fee.findAll({ where: { studentId } });
        res.json(fees);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.updateFeeStatus = async (req, res) => {
    const { feeId } = req.params;
    const { status } = req.body;

    try {
        let fee = await Fee.findByPk(feeId);

        if (!fee) {
            return res.status(404).json({ msg: 'Fee not found' });
        }

        fee.status = status;
        await fee.save();

        res.json(fee);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
