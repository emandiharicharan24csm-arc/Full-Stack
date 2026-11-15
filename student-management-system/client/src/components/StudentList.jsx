// ============================================
// STUDENT LIST COMPONENT
// Displays a search bar and a table of all students.
//
// PROPS (data received from parent App component):
//   students       - array of all student objects
//   searchTerm     - current search text
//   onSearchChange - function to update search text
//   onEdit         - function to call when "Edit" is clicked
//   onDelete       - function to call when "Delete" is clicked
// ============================================

function StudentList({ students, searchTerm, onSearchChange, onEdit, onDelete }) {
  // ---------- FILTER LOGIC ----------
  // Filter students based on what the user typed in the search bar.
  // .filter() creates a new array with only the items that pass the test.
  // .toLowerCase() makes the search case-insensitive (so "cse" matches "CSE").
  // .includes() checks if one string contains another.
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // ---------- RENDER ----------
  return (
    <>
      {/* SEARCH BAR */}
      <div className="search-section">
        <input
          type="text"
          placeholder="🔍 Search by name, roll number, department or email..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <span className="student-count">
          {filteredStudents.length} student(s) found
        </span>
      </div>

      {/* STUDENT TABLE */}
      <div className="table-card">
        <h2>📋 Student Records</h2>

        {filteredStudents.length === 0 ? (
          // Show this message when there are no students to display
          <div className="no-data">
            {students.length === 0
              ? '📭 No students added yet. Use the form above to add your first student!'
              : '🔍 No students match your search. Try a different keyword.'}
          </div>
        ) : (
          // Show the table when there are students
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Email</th>
                <th>Department</th>
                <th>Year</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* .map() loops through each student and creates a table row */}
              {filteredStudents.map((student, index) => (
                // "key" helps React efficiently update the list when items change
                <tr key={student._id || index}>
                  <td>{index + 1}</td>
                  <td>{student.name}</td>
                  <td>{student.rollNumber}</td>
                  <td>{student.email}</td>
                  <td>{student.department}</td>
                  <td>Year {student.year}</td>
                  <td>
                    <div className="actions">
                      <button
                        className="btn btn-edit btn-sm"
                        onClick={() => onEdit(student)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => onDelete(student._id)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default StudentList;

