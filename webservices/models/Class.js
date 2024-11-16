const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
    courseid: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    date: String,
    teacher: String,
    comment: String,
});

module.exports = mongoose.model('Class', classSchema);