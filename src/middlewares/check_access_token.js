const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config({ path: "../config/.env" });

module.exports = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        jwt.verify(token, process.env.TOKEN_SECRET, (err) => {
            if (err) {
                return res.status(400).send("Invalid token.");
            }
            return next();
        });
    } else {
        return res.status(401).send("Access denied. No token provided.");
    }
};