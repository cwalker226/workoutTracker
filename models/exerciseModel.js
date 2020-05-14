const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: {
        type: String,
        required: "Choose a type of workout"
    },
    name: {
        type: String,
        trim: true,
        required: "Enter a name for your workout"
    },
    duration: {
        type: Number,
        required: "Enter a duration of your workout"
    },
    weight: {
        type: Number
    },
    reps: {
        type: Number
    },
    sets: {
        type: Number
    },
    distance: {
        type: Number
    }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;