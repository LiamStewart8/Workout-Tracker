const mongoose = require("mongoose");

const Schema = mongoose.Schema;


const exerciseSchema = new Scema({
    type: {
        type: String,
        required: "Enter the name of the exercise"
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
    },
    weight: {
        type: Number,

    },
    sets: {
        type: Number,

    },
    reps: {
        type: Number,

    }
});

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = Exercise;