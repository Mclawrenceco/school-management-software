const Message = require('../models/Message');

exports.sendMessage = async (req, res) => {
    const { senderId, receiverId, content, date } = req.body;

    try {
        let message = await Message.create({ senderId, receiverId, content, date });
        res.json(message);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getMessages = async (req, res) => {
    const { userId } = req.params;

    try {
        const messages = await Message.findAll({ where: { receiverId: userId } });
        res.json(messages);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
