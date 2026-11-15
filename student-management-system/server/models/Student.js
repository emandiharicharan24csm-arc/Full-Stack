// ============================================
// STUDENT MODEL (Schema)
// Defines what a "Student" looks like in the database.
//
// Schema = a blueprint/template that says:
//   - What fields exist (name, rollNumber, email, etc.)
//   - What type each field is (String, Number, etc.)
//   - Which fields are required (must have a value)
//   - Any rules (like email must be unique)
//
// Mongoose uses this schema to create a "Model" — an object
// that can create, read, update, and delete student records.
// ============================================

const mongoose = require('mongoose');

// Define the schema (blueprint)
const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,          // Text value
      required: [true, 'Student name is required'],  // Must be provided
      trim: true             // Remove extra spaces from beginning/end
    },
    rollNumber: {
      type: String,
      required: [true, 'Roll number is required'],
      unique: true,          // No two students can have the same roll number
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,          // No two students can have the same email
      trim: true,
      lowercase: true        // Automatically convert to lowercase
    },
    department: {
      type: String,
      required: [true, 'Department is required'],
      // enum = only these values are allowed
      enum: ['CSE', 'ECE', 'EEE', 'MECH', 'CIVIL', 'IT'],
      trim: true
    },
    year: {
      type: String,
      required: [true, 'Year is required'],
      enum: ['1', '2', '3', '4']
    }
  },
  {
    // timestamps: true automatically adds:
    //   createdAt = when the record was first created
    //   updatedAt = when the record was last modified
    timestamps: true
  }
);

// Create the Model from the Schema
// "Student" = the name of the MongoDB collection (will be "students" in the DB)
const Student = mongoose.model('Student', studentSchema);

// Export so route files can use it
module.exports = Student;

