const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
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
    }],
    totalDuration: {
        type: Number,
        default: 0
    }
});

WorkoutSchema.methods.calcDuration = function(id, exercise) {
    mongoose.model('Workout').findById(id, function(err, workout) {
        let totDuration = workout.totalDuration + exercise.duration;
        mongoose.model("Workout").findByIdAndUpdate(id, { $set: { totalDuration: totDuration } }, {runValidators: true})
                .then(dbWorkout => {
                    console.log("success");
                }).catch(err => {
                    console.log(err);
                });
    });
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;