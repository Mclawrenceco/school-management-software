const Resource = require('../models/Resource');

exports.uploadResource = async (req, res) => {
    const { userId, title, description, fileUrl } = req.body;

    try {
        let resource = await Resource.create({ userId, title, description, fileUrl });
        res.json(resource);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.findAll();
        res.json(resources);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
