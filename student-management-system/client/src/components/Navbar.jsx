// ============================================
// NAVBAR COMPONENT
// The purple header bar at the top of the page.
// Shows the project title and your roll number.
// ============================================

function Navbar() {
  return (
    // In JSX, we use "className" instead of "class" (because "class" is a reserved word in JavaScript)
    <nav className="navbar">
      <h1>📚 Student Management System</h1>
      <div className="roll-info">
        <div><strong>Roll No:</strong> A24126552080</div>
        <div>Web Application Architecture & Cloud Deployment</div>
      </div>
    </nav>
  );
}

// "export default" means other files can import and use this component
export default Navbar;

