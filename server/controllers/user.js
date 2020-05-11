const User = require('../api/models/user');
const HairQuiz = require('../api/models/hairQuiz');


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

function showUser(req, res) {
    User.findById(req.params.id)
    .exec()
    .then(user => {
        return res.status(201).json(user);
    })
    .catch(() => {
        res.status(500).json({
            success: false,
            message: "Can't find user account"
        })
    })
}

function createHairQuizEntry(req, res) {
    User.findById(req.params.id)
    .exec()
        .then(user => {
            if (!user) return res.notFound();

            user.hairQuizResponses.push(req.body);
            user.save();

            return res.status(201).json(user);
        })
        .catch(() => res.status(500).json({
            success: false
        }));
}

module.exports = {
    createAccount: createUser,
    show: showUser,
    createEntry: createHairQuizEntry
}