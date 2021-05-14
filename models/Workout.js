const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    
    day: {
        type: Date,
        default: Date.now,
    },
    
    exercises: [
    {
        type: {
            type: String,
            required: "Enter the name of the exercise."
        },
        name: {
            type: String,
            required: "Enter a name for the exercise."
        },
        distance: {
            type: Number,
        },
        duration: {
            type: Number,
            required: "Please enter a duration."
        },
        weight: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number
        }
    }]
});


const Workout = mongoose.model("Workout", workoutSchema)

module.exports = Workout;