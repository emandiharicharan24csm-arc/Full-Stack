// ============================================
// APP COMPONENT — Live Full-Stack Integration
//
// In this phase:
// - Data is fetched directly from MongoDB Atlas via our Express backend.
// - All Add, Update, and Delete actions persist permanently in the cloud.
// - Refreshing the page retains all your records!
// ============================================

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import {
  getAllStudents,
  createStudent,
  updateStudent as apiUpdateStudent,
  deleteStudent as apiDeleteStudent
} from './services/api';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  // Helper to show temporary toast banner
  const showMessage = (text, type = 'success') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 4000);
  };

  // 1. READ: Fetch all students from MongoDB on component load
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const response = await getAllStudents();
      setStudents(response.data);
    } catch (error) {
      console.error('Error fetching students:', error);
      const errorMsg = error.response?.data?.message || 'Failed to connect to backend server. Make sure server is running on port 5000.';
      showMessage(`❌ ${errorMsg}`, 'error');
    } finally {
      setLoading(false);
    }
  };

  // Run fetchStudents once when App mounts
  useEffect(() => {
    fetchStudents();
  }, []);

  // 2. CREATE: Add new student in MongoDB Atlas
  const handleAddStudent = async (studentData) => {
    try {
      const response = await createStudent(studentData);
      // Prepend the newly created student returned from MongoDB
      setStudents([response.data, ...students]);
      showMessage(`✅ Student "${response.data.name}" added to MongoDB Atlas!`);
    } catch (error) {
      console.error('Error adding student:', error);
      const errorMsg = error.response?.data?.message || 'Error adding student.';
      showMessage(`❌ ${errorMsg}`, 'error');
    }
  };

  // 3. UPDATE: Edit existing student in MongoDB Atlas
  const handleUpdateStudent = async (studentData) => {
    try {
      const response = await apiUpdateStudent(editingStudent._id, studentData);
      setStudents(
        students.map((s) => (s._id === editingStudent._id ? response.data : s))
      );
      setEditingStudent(null);
      showMessage(`✅ Student "${response.data.name}" updated successfully!`);
    } catch (error) {
      console.error('Error updating student:', error);
      const errorMsg = error.response?.data?.message || 'Error updating student.';
      showMessage(`❌ ${errorMsg}`, 'error');
    }
  };

  // 4. DELETE: Remove student from MongoDB Atlas
  const handleDeleteStudent = async (id) => {
    const student = students.find((s) => s._id === id);
    if (window.confirm(`Are you sure you want to delete "${student?.name || 'this student'}"?`)) {
      try {
        await apiDeleteStudent(id);
        setStudents(students.filter((s) => s._id !== id));
        showMessage('🗑️ Student deleted from MongoDB Atlas!');
      } catch (error) {
        console.error('Error deleting student:', error);
        const errorMsg = error.response?.data?.message || 'Error deleting student.';
        showMessage(`❌ ${errorMsg}`, 'error');
      }
    }
  };

  // Form submit dispatcher
  const handleSubmit = (studentData) => {
    if (editingStudent) {
      handleUpdateStudent(studentData);
    } else {
      handleAddStudent(studentData);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="container">
        {/* Success or Error banner */}
        {message && (
          <div className={`message message-${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Add/Edit Student Form */}
        <StudentForm
          onSubmit={handleSubmit}
          editingStudent={editingStudent}
          onCancelEdit={() => setEditingStudent(null)}
        />

        {/* Loading Spinner / Text */}
        {loading ? (
          <div style={{ textAlign: 'center', padding: '2rem', color: '#667eea', fontWeight: 'bold' }}>
            ⏳ Loading student records from MongoDB Atlas...
          </div>
        ) : (
          <StudentList
            students={students}
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
            onEdit={setEditingStudent}
            onDelete={handleDeleteStudent}
          />
        )}
      </div>
    </div>
  );
}

export default App;
