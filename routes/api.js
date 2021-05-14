const router = require("express").Router();
const Workout = require("../models/Workout.js");



// Show workouts
router.get("/api/workouts", (req, res) => {
    
});

// Creates workout
router.post("/api/workouts", ({ body }, res) => {
    db.Workout.create(body)
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.json(err);
        });
});

// Continue workout
router.put("/api/workouts/:id", (req, res) => {

});

// Get all workouts in range
router.get("/api/workouts/range", (req, res) => {

});

module.exports = router;