// Step 3: Use the Package in Code
// We are importing the 'v4' function from the 'uuid' package and renaming it to 'uuidv4'
const { v4: uuidv4 } = require('uuid');

console.log("==========================================");
console.log("       NPM External Package Demo");
console.log("==========================================\n");

console.log("We have installed the 'uuid' package via NPM.");
console.log("This package generates universally unique identifiers.\n");

// Generate and print a few unique IDs using the external package
console.log(`Generated ID 1: ${uuidv4()}`);
console.log(`Generated ID 2: ${uuidv4()}`);
console.log(`Generated ID 3: ${uuidv4()}`);

console.log("\nNotice how each ID is completely unique! This complex string generation is handled for us by the external library.");
