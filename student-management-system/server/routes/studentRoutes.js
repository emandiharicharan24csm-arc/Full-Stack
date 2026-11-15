// ============================================
// STUDENT ROUTES (API Endpoints)
// These are the URLs the frontend calls to manage students.
//
// How an API works (restaurant analogy):
//   Frontend says: "GET /api/students" → Backend responds with all students
//   Frontend says: "POST /api/students" + data → Backend creates a student
//   Frontend says: "PUT /api/students/123" + data → Backend updates student 123
//   Frontend says: "DELETE /api/students/123" → Backend deletes student 123
//
// req = the REQUEST (what the frontend sends)
// res = the RESPONSE (what the backend sends back)
// ============================================

const express = require('express');
const router = express.Router();   // Router groups related routes together
const Student = require('../models/Student');

// ─────────────────────────────────────────────
// GET /api/students — Get ALL students
// ─────────────────────────────────────────────
router.get('/', async (req, res) => {
  try {
    // Student.find() retrieves all student records from MongoDB
    // .sort({ createdAt: -1 }) shows newest students first
    const students = await Student.find().sort({ createdAt: -1 });
    res.status(200).json(students);
    //   200 = "OK, here's the data"
    //   .json() sends the data as JSON format
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
    //   500 = "Something went wrong on the server"
  }
});

// ─────────────────────────────────────────────
// GET /api/students/reports/department-summary — MongoDB Aggregation
// ─────────────────────────────────────────────
router.get('/reports/department-summary', async (req, res) => {
  try {
    const summary = await Student.aggregate([
      {
        $group: {
          _id: '$department',
          studentCount: { $sum: 1 },
          students: { $push: { name: '$name', rollNumber: '$rollNumber', year: '$year' } }
        }
      },
      { $sort: { studentCount: -1 } }
    ]);
    res.status(200).json(summary);
  } catch (error) {
    res.status(500).json({ message: 'Unable to generate summary', error: error.message });
  }
});

// ─────────────────────────────────────────────
// GET /api/students/:id — Get ONE student by ID
// ─────────────────────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    // req.params.id = the ID from the URL (e.g., /api/students/abc123 → id = "abc123")
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
      //   404 = "Not found"
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ─────────────────────────────────────────────
// POST /api/students — CREATE a new student
// ─────────────────────────────────────────────
router.post('/', async (req, res) => {
  try {
    // req.body = the data the frontend sent (name, rollNumber, email, etc.)
    const { name, rollNumber, email, department, year } = req.body;

    // Check if a student with the same roll number already exists
    const existingStudent = await Student.findOne({ rollNumber });
    if (existingStudent) {
      return res.status(400).json({ message: 'A student with this roll number already exists' });
      //   400 = "Bad request" (the client sent something wrong)
    }

    // Create a new student document and save it to MongoDB
    const student = new Student({ name, rollNumber, email, department, year });
    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
    //   201 = "Created successfully"
  } catch (error) {
    // Handle Mongoose validation errors (e.g., missing required fields)
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ─────────────────────────────────────────────
// PUT /api/students/:id — UPDATE a student
// ─────────────────────────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const { name, rollNumber, email, department, year } = req.body;

    // findByIdAndUpdate finds the student and updates it in one step
    // { new: true } = return the UPDATED version (not the old one)
    // { runValidators: true } = check schema rules before updating
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { name, rollNumber, email, department, year },
      { new: true, runValidators: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ message: error.message });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// ─────────────────────────────────────────────
// DELETE /api/students/:id — DELETE a student
// ─────────────────────────────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);

    if (!deletedStudent) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;

