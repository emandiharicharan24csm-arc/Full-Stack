const output = document.getElementById('output');

// --- 1. Using a Constructor Function ---
// Older way to blueprint an object
function CarFunction(make, model) {
    // Properties
    this.make = make;
    this.model = model;
    
    // Method inside a function
    this.displayInfo = function() {
        return `I am a ${this.make} ${this.model} (Created using a Function).`;
    };
}

// --- 2. Using an ES6 Class ---
// Modern, cleaner way to blueprint an object
class CarClass {
    // The constructor sets up the initial properties when the object is created
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    
    // Method inside a class (cleaner syntax, shared automatically)
    displayInfo() {
        return `I am a ${this.make} ${this.model} (Created using a Class).`;
    }
}

// --- Demonstration Event Listeners ---

document.getElementById('btnFunction').addEventListener('click', () => {
    // We instantiate (create) a new object using the 'new' keyword
    const car1 = new CarFunction('Toyota', 'Corolla');
    output.innerHTML = `<strong>Function Output:</strong><br>${car1.displayInfo()}`;
});

document.getElementById('btnClass').addEventListener('click', () => {
    // We instantiate a new object using the 'new' keyword, same as above
    const car2 = new CarClass('Tesla', 'Model 3');
    output.innerHTML = `<strong>Class Output:</strong><br>${car2.displayInfo()}`;
});
