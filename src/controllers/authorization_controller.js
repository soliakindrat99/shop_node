const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: "../config/.env" });

exports.create_token = (req, res) => {
    const { username } = req.body;
    const token = jwt.sign({ username: username }, process.env.TOKEN_SECRET);
    res.json({ token });
};