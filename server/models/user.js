import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

mongoose.Promise = global.Promise;

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
    hairProblems: {
        type: String,
        required: true
    }
});

UserSchema.plugin(uniqueValidator, { message: 'already exists.' });

mongoose.model('User', userSchema);