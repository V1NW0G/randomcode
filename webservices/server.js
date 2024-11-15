const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory data
let courses = [
    { courseid: 1, day_of_week: 'Monday', time: '10:00', duration: 60, capacity: 10, price: 100, type: 'Flow Yoga', description: 'Test Course One' },
    { courseid: 2, day_of_week: 'Tuesday', time: '19:00', duration: 60, capacity: 15, price: 200, type: 'Family Yoga', description: 'Test Course Two' },
    { courseid: 3, day_of_week: 'Wednesday', time: '20:00', duration: 45, capacity: 10, price: 150, type: 'Aerial Yoga', description: 'Test Course Three' },
];

let classes = [
    { classid: 1, courseid: 1, date: '2024-10-28', teacher: 'Peter Wong', comment: 'Great teacher!' },
    { classid: 2, courseid: 2, date: '2024-10-29', teacher: 'Linda Lee', comment: 'Fun class!' },
    { classid: 3, courseid: 3, date: '2024-10-30', teacher: 'Mary Chan', comment: 'Interesting class!' },
];

// GET endpoint to retrieve courses
app.get('/courses', (req, res) => {
    res.json(courses);
});

// POST endpoint to create a new course
app.post('/courses', (req, res) => {
    const newCourse = {
        courseid: courses.length + 1,
        day_of_week: req.body.day_of_week,
        time: req.body.time,
        duration: req.body.duration,
        capacity: req.body.capacity,
        price: req.body.price,
        type: req.body.type,
        description: req.body.description,
    };
    courses.push(newCourse);
    res.status(201).json(newCourse);
    console.log("New Course:", newCourse);
    console.log("All Courses:", courses);
});

// GET endpoint to retrieve classes
app.get('/classes', (req, res) => {
    res.json(classes);
});

// POST endpoint to create a new class instance
app.post('/classes', (req, res) => {
    const newClass = {
        classid: classes.length + 1,
        courseid: req.body.courseid,
        date: req.body.date,
        teacher: req.body.teacher,
        comment: req.body.comment,
    };
    classes.push(newClass);
    res.status(201).json(newClass);
    console.log("New Class:", newClass);
    console.log("All Classes:", classes);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});