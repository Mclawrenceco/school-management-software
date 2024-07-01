const express = require('express');
const dotenv = require('dotenv');
const { sequelize } = require('./models');

dotenv.config();

const app = express();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
// Add other routes here...

const PORT = process.env.PORT || 5000;

sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
