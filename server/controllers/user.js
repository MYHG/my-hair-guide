const User = require('../api/models/user');


function createUser(req, res) {
    User.create(req.body)
    .then(user => {
        return res.status(201).json(user);
    })
    .catch(() => res.status(500).json({
        success: false, 
        message: "Please send the correct information to create a new user account"
    }));
}


module.exports = {
    create: createUser
}