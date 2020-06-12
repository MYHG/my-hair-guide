const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Promise = global.Promise;

const hairQuizSchema = new mongoose.Schema({
  texture: {
    question: { type: String },
    description: { type: String },
    answers: [{
      natural: { type: Boolean },
      chemicallyProcessed: { type: Boolean },
      transitioning: { type: Boolean },
    }],
  },
  porosity: {
    question: { type: String },
    description: { type: String },
    answers: [{
      low: { type: Boolean },
      normal: { type: Boolean },
      high: { type: Boolean },
    }],
  },
  thickness: {
    question: { type: String },
    description: { type: String },
    answers: [{
      thin: { type: Boolean },
      thick: { type: Boolean },
    }],
  },
  moisture: {
    question: { type: String },
    description: { type: String },
    answers: [{
      oneToTwo: { type: Boolean },
      twoToThree: { type: Boolean },
      fourToFive: { type: Boolean },
      onceAWeek: { type: Boolean },
    }],
  },
  hairProblems: {
    question: { type: String },
    description: { type: String },
    answers: [{
      dry: { type: Boolean },
      breakage: { type: Boolean },
      thinningEdges: { type: Boolean },
      splitEnds: { type: Boolean },
      excessiveDandruff: { type: Boolean },
      tangling: { type: Boolean },
      heatDamage: { type: Boolean },
      limpHair: { type: Boolean },
      frizzy: { type: Boolean },
      colourMaintenance: { type: Boolean },
      curlDefinition: { type: Boolean },
    }],
  },
});

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  hairQuizResponses: [hairQuizSchema],
});


userSchema.plugin(uniqueValidator, { message: 'already exists.' });
module.exports = mongoose.model('User', userSchema);
