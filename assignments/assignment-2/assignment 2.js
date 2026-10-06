// Assignment 2: Student Record Management System using MongoDB
// Database: collegeDB | Collection: students

// -----------------------------------------------------------------------------
// HOW TO RUN:
// mongosh --> load("assignment 2.js")
// OR paste directly into MongoDB Compass (_mongosh tab)
// -----------------------------------------------------------------------------


// STEP 1: Switch to / create the database
db = db.getSiblingDB("collegeDB");
print("Switched to database: " + db.getName());


// STEP 2: Create the collection (drop first to start fresh)
db.students.drop();
db.createCollection("students");
print("\n[SUCCESS] Collection 'students' created.");


// STEP 3: Insert 8 student records
print("\n--- Step 3: Inserting Student Records ---");

db.students.insertMany([
    { rollNo: "23CM001", name: "Ravi Kumar",    branch: "CSE-AIML", year: 3, marks: 85, email: "ravi@example.com"    },
    { rollNo: "23CM002", name: "Priya Sharma",  branch: "CSE-AIML", year: 3, marks: 92, email: "priya@example.com"   },
    { rollNo: "23CS015", name: "Arun Varma",    branch: "CSE",      year: 2, marks: 78, email: "arun@example.com"    },
    { rollNo: "23IT040", name: "Sneha Reddy",   branch: "IT",       year: 3, marks: 68, email: "sneha@example.com"   },
    { rollNo: "23EC012", name: "Karthik Nair",  branch: "ECE",      year: 1, marks: 45, email: "karthik@example.com" },
    { rollNo: "23CM033", name: "Ananya Roy",    branch: "CSE-AIML", year: 3, marks: 88, email: "ananya@example.com"  },
    { rollNo: "23CS088", name: "Vikram Singh",  branch: "CSE",      year: 4, marks: 42, email: "vikram@example.com"  },
    { rollNo: "23IT021", name: "Divya Patel",   branch: "IT",       year: 2, marks: 95, email: "divya@example.com"   }
]);

print("[SUCCESS] Inserted 8 student documents.");


// STEP 4: Display all students
print("\n--- Step 4: All Students ---");
db.students.find().forEach(printjson);


// STEP 5: Students in a specific branch
print("\n--- Step 5: Students in 'CSE-AIML' Branch ---");
db.students.find({ branch: "CSE-AIML" }).forEach(printjson);


// STEP 6: Students with marks > 75
// $gt = greater than
print("\n--- Step 6: Students with Marks > 75 ---");
db.students.find({ marks: { $gt: 75 } }).forEach(printjson);


// STEP 7: Search by rollNo
print("\n--- Step 7: Search Student '23CM001' ---");
db.students.find({ rollNo: "23CM001" }).forEach(printjson);


// STEP 8: Multiple conditions -- year = 3 AND marks >= 80
// $gte = greater than or equal
print("\n--- Step 8: Year 3 Students with Marks >= 80 ---");
db.students.find({ year: 3, marks: { $gte: 80 } }).forEach(printjson);


// STEP 9: Update marks using $set (only updates specified field, not the whole document)
print("\n--- Step 9: Update Marks of '23CM001' to 90 ---");
db.students.updateOne(
    { rollNo: "23CM001" },
    { $set: { marks: 90 } }
);
db.students.find({ rollNo: "23CM001" }).forEach(printjson);


// STEP 10: Update email field
print("\n--- Step 10: Update Email of '23CM002' ---");
db.students.updateOne(
    { rollNo: "23CM002" },
    { $set: { email: "priya.aiml@college.edu" } }
);
db.students.find({ rollNo: "23CM002" }).forEach(printjson);


// STEP 11: Delete a student record
print("\n--- Step 11: Delete Student '23CS088' ---");
db.students.deleteOne({ rollNo: "23CS088" });
print("Records remaining: " + db.students.countDocuments());


// STEP 12: Sort by marks descending (-1 = highest first, 1 = lowest first)
print("\n--- Step 12: Students Sorted by Marks (Highest First) ---");
db.students.find().sort({ marks: -1 }).forEach(printjson);


// STEP 13: Create an index on rollNo for faster searches
print("\n--- Step 13: Create Index on rollNo ---");
db.students.createIndex({ rollNo: 1 });
db.students.getIndexes().forEach(printjson);


// STEP 14: Show query performance -- IXSCAN (with index) vs COLLSCAN (without)
print("\n--- Step 14: Query Performance with Index ---");
const stats = db.students.find({ rollNo: "23CM001" }).explain("executionStats");
print("Stage           : " + stats.executionStats.executionStages.stage);
print("Docs Examined   : " + stats.executionStats.totalDocsExamined);
print("Keys Examined   : " + stats.executionStats.totalKeysExamined);
print("Execution Time  : " + stats.executionStats.executionTimeMillis + " ms");


// =============================================================================
// REAL-TIME EXTENSION QUERIES
// =============================================================================

// 1. Students scoring above 80
print("\n--- Extension 1: Marks > 80 ---");
db.students.find({ marks: { $gt: 80 } }).forEach(printjson);

// 2. Students scoring below 50
print("\n--- Extension 2: Marks < 50 ---");
db.students.find({ marks: { $lt: 50 } }).forEach(printjson);

// 3. Highest scoring student -- sort desc, take first result
print("\n--- Extension 3: Highest Scoring Student ---");
db.students.find().sort({ marks: -1 }).limit(1).forEach(printjson);

// 4. Students in CSE branch
print("\n--- Extension 4: CSE Branch Students ---");
db.students.find({ branch: "CSE" }).forEach(printjson);

// 5. All students sorted by marks
print("\n--- Extension 5: All Students Sorted by Marks ---");
db.students.find().sort({ marks: -1 }).forEach(printjson);


print("\n=============================================================");
print("All Operations Completed!");
print("=============================================================\n");
