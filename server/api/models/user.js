const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');

mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        unique: true
    },
    password: { 
        type: String, 
        required: true 
    },
    age: {
        type: Number,
        required: true
    },
    hairQuizResponses: [{ type: Schema.Types.ObjectId, ref: 'HairQuiz ' }]
});

const hairQuizSchema = new Schema({
    texture: {
        natural: {
            type: Boolean
        },
        chemicallyProcessed: {
            type: Boolean
        },
        transitioning: {
            type: Boolean
        }
    },
    hairProblems: {
        dry: {
            type: Boolean
        },
        breakage: {
            type: Boolean
        },
        thinningEdges: {
            type: Boolean
        },
        splitEnds: {
            type: Boolean
        },
        excessiveDandruff: {
            type: Boolean
        },
        tangling: {
            type: Boolean
        },
        heatDamage: {
            type: Boolean
        },
        limpHair: {
            type: Boolean
        },
        frizzy: {
            type: Boolean
        },
        colourMaintenance: {
            type: Boolean
        },
        curlDefinition: {
            type: Boolean
        }
    },
});


userSchema.plugin(uniqueValidator, { message: 'already exists.' });

mongoose.model('HairQuiz', hairQuizSchema);
mongoose.model('User', userSchema);