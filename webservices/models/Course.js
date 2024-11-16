const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    day_of_week: String,
    time: String,
    duration: Number,
    capacity: Number,
    price: Number,
    type: String,
    description: String,
});

module.exports = mongoose.model('Course', courseSchema);