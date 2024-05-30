const jwt = require('jsonwebtoken');
const generateToken = (user) => {
    const payload = {
        id: user._id,
        email: user.email,
        username: user.username 
    };

    return jwt.sign(payload,'123', {expiresIn: '1h'});
};

module.exports = generateToken;