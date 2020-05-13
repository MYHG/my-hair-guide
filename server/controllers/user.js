const User = require('../api/models/user');

function createUser(req, res) {
  User.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch(() => res.status(500).json({
      success: false,
      message: 'Please send the correct information to create a new user account',
    }));
}

function showUser(req, res) {
  User.findById(req.params.id)
    .exec()
    .then((user) => res.status(201).json(user))
    .catch(() => {
      res.status(500).json({
        success: false,
        message: 'User account does not exist',
      });
    });
}

function createHairQuizEntry(req, res) {
  User.findById(req.params.id)
    .exec()
    .then((user) => {
      if (!user) return res.notFound();

      user.hairQuizResponses.push(req.body);
      user.save();

      return res.status(201).json(user);
    })
    .catch(() => res.status(500).json({
      success: false,
    }));
}

module.exports = {
  createAccount: createUser,
  show: showUser,
  createEntry: createHairQuizEntry,
};
