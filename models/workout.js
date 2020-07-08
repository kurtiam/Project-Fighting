// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var workout = {
    all: function (cb) {
        orm.all("workouts", function (res) {
            cb(res);
        });
    },
    // The variables cols and vals are arrays.
    create: function (cols, vals, cb) {
        orm.create("workouts", cols, vals, function (res) {
            cb(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("workouts", objColVals, condition, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (catsController.js).
module.exports = workout;
