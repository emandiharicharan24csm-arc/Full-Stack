// =============================================================================
// Assignment 2: Build a Student Record Management System using MongoDB
// Objective    : Store, retrieve, update, and manage student information.
// Database     : collegeDB
// Collection   : students
// Level        : Complete Beginner Friendly
// =============================================================================

// -----------------------------------------------------------------------------
// HOW TO RUN THIS SCRIPT:
// Option 1 (MongoDB Shell / mongosh):
//   1. Open your terminal or command prompt.
//   2. Start mongosh by typing: mongosh
//   3. Run this file by typing: load("assignment 2.js")
//      (or copy-paste the commands directly into mongosh)
//
// Option 2 (MongoDB Compass):
//   1. Open MongoDB Compass and connect to: mongodb://localhost:27017
//   2. Open the "_mongosh" tab at the bottom of the Compass window.
//   3. Paste and run the queries step-by-step.
// -----------------------------------------------------------------------------


// =============================================================================
// STEP 1: CREATE / SWITCH TO DATABASE
// Database Name: collegeDB
// =============================================================================
// In interactive MongoDB Shell (mongosh), you can simply type:
// use collegeDB;

// In script mode, getSiblingDB selects or creates the database:
db = db.getSiblingDB("collegeDB");
print("Switched to database: " + db.getName());


// =============================================================================
// STEP 2: CREATE COLLECTION
// Collection Name: students
// =============================================================================
// Drop existing collection to start fresh (optional for testing):
db.students.drop();

// Explicitly create collection 'students':
db.createCollection("students");
print("\n[SUCCESS] Collection 'students' created successfully.");


// =============================================================================
// STEP 3: INSERT STUDENT RECORDS INTO THE COLLECTION
// Insert at least 8 realistic student records.
// Each document contains: rollNo, name, branch, year, marks, email
// =============================================================================
print("\n--- Step 3: Inserting Student Records ---");

db.students.insertMany([
    {
        rollNo: "23CM001",
        name: "Ravi Kumar",
        branch: "CSE-AIML",
        year: 3,
        marks: 85,
        email: "ravi@example.com"
    },
    {
        rollNo: "23CM002",
        name: "Priya Sharma",
        branch: "CSE-AIML",
        year: 3,
        marks: 92,
        email: "priya@example.com"
    },
    {
        rollNo: "23CS015",
        name: "Arun Varma",
        branch: "CSE",
        year: 2,
        marks: 78,
        email: "arun@example.com"
    },
    {
        rollNo: "23IT040",
        name: "Sneha Reddy",
        branch: "IT",
        year: 3,
        marks: 68,
        email: "sneha@example.com"
    },
    {
        rollNo: "23EC012",
        name: "Karthik Nair",
        branch: "ECE",
        year: 1,
        marks: 45,
        email: "karthik@example.com"
    },
    {
        rollNo: "23CM033",
        name: "Ananya Roy",
        branch: "CSE-AIML",
        year: 3,
        marks: 88,
        email: "ananya@example.com"
    },
    {
        rollNo: "23CS088",
        name: "Vikram Singh",
        branch: "CSE",
        year: 4,
        marks: 42,
        email: "vikram@example.com"
    },
    {
        rollNo: "23IT021",
        name: "Divya Patel",
        branch: "IT",
        year: 2,
        marks: 95,
        email: "divya@example.com"
    }
]);

print("[SUCCESS] Inserted 8 student documents into 'students' collection.");


// =============================================================================
// STEP 4: DISPLAY ALL STUDENTS
// Query: db.students.find()
// =============================================================================
print("\n--- Step 4: Display All Students ---");
db.students.find().forEach(printjson);


// =============================================================================
// STEP 5: DISPLAY STUDENTS BELONGING TO A PARTICULAR BRANCH
// Query: db.students.find({ branch: "CSE-AIML" })
// =============================================================================
print("\n--- Step 5: Display Students in 'CSE-AIML' Branch ---");
db.students.find({ branch: "CSE-AIML" }).forEach(printjson);


// =============================================================================
// STEP 6: DISPLAY STUDENTS WHO SCORED MORE THAN 75 MARKS
// Operator: $gt (Greater Than)
// Query: db.students.find({ marks: { $gt: 75 } })
// =============================================================================
print("\n--- Step 6: Display Students with Marks > 75 ---");
db.students.find({ marks: { $gt: 75 } }).forEach(printjson);


// =============================================================================
// STEP 7: SEARCH FOR A STUDENT USING rollNo
// Query: db.students.find({ rollNo: "23CM001" })
// =============================================================================
print("\n--- Step 7: Search for Student with Roll No '23CM001' ---");
db.students.find({ rollNo: "23CM001" }).forEach(printjson);


// =============================================================================
// STEP 8: SEARCH STUDENTS BASED ON SPECIFIED CONDITION (MARKS OR YEAR)
// Example: Find 3rd year students who scored 80 or more marks
// Operator: $gte (Greater Than or Equal to)
// Query: db.students.find({ year: 3, marks: { $gte: 80 } })
// =============================================================================
print("\n--- Step 8: Search Students with Year = 3 and Marks >= 80 ---");
db.students.find({ year: 3, marks: { $gte: 80 } }).forEach(printjson);


// =============================================================================
// STEP 9: UPDATE THE MARKS OF A PARTICULAR STUDENT
// Method: updateOne()
// Operator: $set
// Example: Update marks of rollNo '23CM001' to 90
// =============================================================================
print("\n--- Step 9: Update Marks of Student '23CM001' to 90 ---");
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { marks: 90 } }
);
print("Updated Record:");
db.students.find({ rollNo: "23CM001" }).forEach(printjson);


// =============================================================================
// STEP 10: UPDATE ANOTHER FIELD (EMAIL OR BRANCH)
// Example: Update email of rollNo '23CM002'
// =============================================================================
print("\n--- Step 10: Update Email of Student '23CM002' ---");
db.students.updateOne(
    { rollNo: "23CM002" },
    { $set: { email: "priya.aiml@college.edu" } }
);
print("Updated Record:");
db.students.find({ rollNo: "23CM002" }).forEach(printjson);


// =============================================================================
// STEP 11: DELETE A STUDENT RECORD USING rollNo
// Method: deleteOne()
// Example: Delete student with rollNo '23CS088'
// =============================================================================
print("\n--- Step 11: Delete Student Record '23CS088' ---");
db.students.deleteOne({ rollNo: "23CS088" });
print("[SUCCESS] Record deleted. Total students remaining: " + db.students.countDocuments());


// =============================================================================
// STEP 12: DISPLAY STUDENTS IN DESCENDING ORDER OF MARKS
// Method: sort({ marks: -1 })
// (Use 1 for Ascending order, -1 for Descending order)
// =============================================================================
print("\n--- Step 12: Display Students in Descending Order of Marks ---");
db.students.find().sort({ marks: -1 }).forEach(printjson);


// =============================================================================
// STEP 13: CREATE AN INDEX ON rollNo
// Method: createIndex({ rollNo: 1 })
// =============================================================================
print("\n--- Step 13: Create an Index on rollNo ---");
db.students.createIndex({ rollNo: 1 });
print("Current Indexes on 'students' collection:");
db.students.getIndexes().forEach(printjson);


// =============================================================================
// STEP 14: DEMONSTRATE WHY INDEXING IS USEFUL FOR SEARCHING STUDENT RECORDS
// Method: explain("executionStats")
// Explanation:
// - Without Index: MongoDB performs a "COLLSCAN" (Collection Scan), checking
//   every single document in the collection one by one.
// - With Index   : MongoDB performs an "IXSCAN" (Index Scan), using the B-Tree
//   index to directly locate the document in O(log n) time.
// =============================================================================
print("\n--- Step 14: Demonstrate Indexing using explain('executionStats') ---");
const stats = db.students.find({ rollNo: "23CM001" }).explain("executionStats");
print("Query Execution Stage    : " + stats.executionStats.executionStages.stage);
print("Total Documents Examined : " + stats.executionStats.totalDocsExamined);
print("Total Keys Examined      : " + stats.executionStats.totalKeysExamined);
print("Execution Time           : " + stats.executionStats.executionTimeMillis + " ms");
print("Explanation: The stage shows IXSCAN (Index Scan), meaning MongoDB used");
print("the index to locate the record immediately without examining every document.");


// =============================================================================
// REAL-TIME EXTENSION 
// =============================================================================

// 1. Find students scoring above 80
print("\n--- Extension 1: Find Students Scoring Above 80 ---");
db.students.find({ marks: { $gt: 80 } }).forEach(printjson);

// 2. Find students scoring below 50
print("\n--- Extension 2: Find Students Scoring Below 50 ---");
db.students.find({ marks: { $lt: 50 } }).forEach(printjson);

// 3. Find the highest-scoring student
// Logic: Sort descending by marks and take the first record (.limit(1))
print("\n--- Extension 3: Find the Highest-Scoring Student ---");
db.students.find().sort({ marks: -1 }).limit(1).forEach(printjson);

// 4. Find students belonging to a particular branch ("CSE")
print("\n--- Extension 4: Find Students in Branch 'CSE' ---");
db.students.find({ branch: "CSE" }).forEach(printjson);

// 5. Display students sorted according to marks
print("\n--- Extension 5: Display Students Sorted According to Marks ---");
db.students.find().sort({ marks: -1 }).forEach(printjson);


print("\n=============================================================");
print("Student Record Management System - All Operations Completed!");
print("=============================================================\n");
