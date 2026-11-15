// ============================================
// STUDENT FORM COMPONENT
// A form to add a new student or edit an existing one.
// 
// PROPS (data received from parent App component):
//   onSubmit        - function to call when form is submitted
//   editingStudent  - the student being edited (null if adding new)
//   onCancelEdit    - function to call when user clicks "Cancel"
// ============================================

import { useState, useEffect } from 'react';

function StudentForm({ onSubmit, editingStudent, onCancelEdit }) {
  // ---------- STATE ----------
  // "state" is data that can change over time.
  // useState returns [currentValue, functionToUpdateIt]
  const [formData, setFormData] = useState({
    name: '',
    rollNumber: '',
    email: '',
    department: '',
    year: ''
  });

  // ---------- EFFECT ----------
  // useEffect runs code when "editingStudent" changes.
  // If we're editing someone, fill the form with their data.
  // If we stopped editing, clear the form.
  useEffect(() => {
    if (editingStudent) {
      setFormData({
        name: editingStudent.name,
        rollNumber: editingStudent.rollNumber,
        email: editingStudent.email,
        department: editingStudent.department,
        year: editingStudent.year
      });
    } else {
      setFormData({ name: '', rollNumber: '', email: '', department: '', year: '' });
    }
  }, [editingStudent]);

  // ---------- HANDLERS ----------
  // Called every time the user types in any input field
  const handleChange = (e) => {
    // e.target.name = which field (e.g., "name", "email")
    // e.target.value = what the user typed
    // "...formData" copies all existing data, then we override the changed field
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Called when the user clicks "Add Student" or "Update Student"
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from refreshing (default form behavior)

    // Validate: make sure all fields are filled
    if (!formData.name || !formData.rollNumber || !formData.email || !formData.department || !formData.year) {
      alert('⚠️ Please fill in all fields!');
      return;
    }

    // Send the data to the parent component
    onSubmit(formData);

    // Clear the form only if we're adding (not editing)
    if (!editingStudent) {
      setFormData({ name: '', rollNumber: '', email: '', department: '', year: '' });
    }
  };

  // ---------- RENDER ----------
  return (
    <div className="form-card">
      {/* Show different title based on whether we're adding or editing */}
      <h2>{editingStudent ? '✏️ Edit Student' : '➕ Add New Student'}</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          {/* NAME */}
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Hari Charan"
            />
          </div>

          {/* ROLL NUMBER */}
          <div className="form-group">
            <label>Roll Number</label>
            <input
              type="text"
              name="rollNumber"
              value={formData.rollNumber}
              onChange={handleChange}
              placeholder="e.g. A24126552080"
            />
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. student@college.edu"
            />
          </div>

          {/* DEPARTMENT - Dropdown select */}
          <div className="form-group">
            <label>Department</label>
            <select name="department" value={formData.department} onChange={handleChange}>
              <option value="">Select Department</option>
              <option value="CSE">CSE - Computer Science</option>
              <option value="ECE">ECE - Electronics</option>
              <option value="EEE">EEE - Electrical</option>
              <option value="MECH">MECH - Mechanical</option>
              <option value="CIVIL">CIVIL - Civil</option>
              <option value="IT">IT - Information Technology</option>
            </select>
          </div>

          {/* YEAR - Dropdown select */}
          <div className="form-group">
            <label>Year</label>
            <select name="year" value={formData.year} onChange={handleChange}>
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
            </select>
          </div>
        </div>

        {/* BUTTONS */}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">
            {editingStudent ? '💾 Update Student' : '➕ Add Student'}
          </button>
          {/* Show "Cancel" button only when editing */}
          {editingStudent && (
            <button type="button" className="btn btn-secondary" onClick={onCancelEdit}>
              ❌ Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default StudentForm;

