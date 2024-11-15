const express = require('express');
const mongoose = require('mongoose');
const Course = require('./models/Course');
const Class = require('./models/Class');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/universal-yoga', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log('MongoDB connection error:', err));

// GET endpoint to retrieve courses
app.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST endpoint to create a new course
app.post('/courses', async (req, res) => {
    const { day_of_week, time, duration, capacity, price, type, description } = req.body;

    const newCourse = new Course({
        day_of_week,
        time,
        duration,
        capacity,
        price,
        type,
        description
    });

    try {
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// GET endpoint to retrieve classes
app.get('/classes', async (req, res) => {
    try {
        const classes = await Class.find().populate('courseid');
        res.json(classes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST endpoint to create a new class instance
app.post('/classes', async (req, res) => {
    const { courseid, date, teacher, comment } = req.body;

    const newClass = new Class({
        courseid,
        date,
        teacher,
        comment
    });

    try {
        const savedClass = await newClass.save();
        res.status(201).json(savedClass);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});