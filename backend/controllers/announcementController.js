const Announcement = require('../models/Announcement');

exports.createAnnouncement = async (req, res) => {
    const { userId, title, content, date } = req.body;

    try {
        let announcement = await Announcement.create({ userId, title, content, date });
        res.json(announcement);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getAnnouncements = async (req, res) => {
    try {
        const announcements = await Announcement.findAll();
        res.json(announcements);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
