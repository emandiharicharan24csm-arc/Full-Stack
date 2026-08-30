// ==========================================
// JAVASCRIPT PROGRAM: ARRAYS AND FUNCTIONS
// ==========================================

// ---------- 1. ONE-DIMENSIONAL ARRAY ----------
let colors = ["Red", "Blue", "Green", "Yellow"];

console.log("1. One-Dimensional Array:");
console.log(colors);


// ---------- 2. TWO-DIMENSIONAL ARRAY ----------
let students = [
    ["Arjun", 18],
    ["Meena", 19],
    ["Kiran", 18]
];

console.log("\n2. Two-Dimensional Array:");

for (let i = 0; i < students.length; i++) {
    console.log("Name:", students[i][0],
                "Age:", students[i][1]);
}


// ---------- 3. MULTI-DIMENSIONAL ARRAY ----------
let subjects = [
    [
        ["Maths", 80],
        ["English", 75]
    ],
    [
        ["Science", 85],
        ["Computer", 90]
    ]
];

console.log("\n3. Multi-Dimensional Array:");
console.log(subjects);


// ---------- 4. ARRAY OF OBJECTS ----------
let books = [
    { name: "JavaScript", price: 500 },
    { name: "Python", price: 400 },
    { name: "HTML", price: 300 }
];

console.log("\n4. Array of Objects:");

books.forEach(function(book) {
    console.log("Book:", book.name,
                "Price:", book.price);
});


// ==========================================
// FUNCTIONS
// ==========================================

// ---------- 5. NORMAL FUNCTION ----------
function add(a, b) {
    return a + b;
}

console.log("\n5. Normal Function:");
console.log("Addition =", add(5, 10));


// ---------- 6. FUNCTION WITH NO ARGUMENTS ----------
function welcome() {
    console.log("Welcome to JavaScript!");
}

console.log("\n6. Function with No Arguments:");
welcome();


// ---------- 7. FUNCTION WITH ARGUMENTS ----------
function multiply(a, b) {
    return a * b;
}

console.log("\n7. Function with Arguments:");
console.log("Multiplication =", multiply(4, 5));


// ---------- 8. ANONYMOUS FUNCTION ----------
let subtract = function(a, b) {
    return a - b;
};

console.log("\n8. Anonymous Function:");
console.log("Subtraction =", subtract(15, 6));


// ---------- 9. ARROW FUNCTION ----------
let square = (n) => {
    return n * n;
};

console.log("\n9. Arrow Function:");
console.log("Square =", square(7));


// ---------- 10. SHORT ARROW FUNCTION ----------
let cube = n => n * n * n;

console.log("\n10. Short Arrow Function:");
console.log("Cube =", cube(4));


// ---------- 11. CALLBACK FUNCTION ----------
function calculate(a, b, operation) {
    return operation(a, b);
}

let answer = calculate(8, 2, function(a, b) {
    return a + b;
});

console.log("\n11. Callback Function:");
console.log("Answer =", answer);


// ---------- 12. RECURSIVE FUNCTION ----------
function factorial(n) {

    if (n == 0 || n == 1) {
        return 1;
    }

    return n * factorial(n - 1);
}

console.log("\n12. Recursive Function:");
console.log("Factorial of 4 =", factorial(4));


// ==========================================
// ARRAY METHODS
// ==========================================

let numbers = [2, 4, 6, 8, 10];

console.log("\n13. Array Methods:");


// ---------- map() ----------
let doubleNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("map() =", doubleNumbers);


// ---------- filter() ----------
let greaterNumbers = numbers.filter(function(num) {
    return num > 5;
});

console.log("filter() =", greaterNumbers);


// ---------- reduce() ----------
let total = numbers.reduce(function(sum, num) {
    return sum + num;
}, 0);

console.log("reduce() =", total);


// ---------- forEach() ----------
console.log("forEach():");

numbers.forEach(function(num) {
    console.log(num);
});