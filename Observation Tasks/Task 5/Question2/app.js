// Import required built-in Node.js modules
const fs = require('fs');
const readline = require('readline');

// Set up readline interface to read input from the terminal
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("===================================");
console.log("    Node.js File Management");
console.log("===================================\n");

// Step 1: Ask the user for a filename
rl.question('Enter a filename (e.g., myData.txt): ', (filename) => {
    
    // Basic validation to ensure a filename was entered
    if (!filename.trim()) {
        console.log("[ERROR] Filename cannot be empty!");
        rl.close();
        return; // Exit the program
    }

    // Step 2: Ask the user for content to write into the file
    rl.question('Enter content to write to the file: ', (initialContent) => {
        
        try {
            // Write the content to the file
            // fs.writeFileSync creates the file if it doesn't exist, and overwrites if it does
            fs.writeFileSync(filename, initialContent);
            console.log(`\n[SUCCESS] File '${filename}' created/written successfully.`);
        } catch (error) {
            console.error(`[ERROR] Could not write to file: ${error.message}`);
            rl.close();
            return;
        }

        // Step 3: Ask the user for additional content to append
        rl.question('Enter additional content to append to the file: ', (appendContent) => {
            
            try {
                // Append the content. We add a newline character (\n) so it starts on a new line
                fs.appendFileSync(filename, '\n' + appendContent);
                console.log(`[SUCCESS] Additional content appended to '${filename}'.`);
            } catch (error) {
                console.error(`[ERROR] Could not append to file: ${error.message}`);
                rl.close();
                return;
            }

            // Step 4: Read the final contents of the file and display it
            console.log(`\n--- Final Contents of ${filename} ---`);
            try {
                const finalContents = fs.readFileSync(filename, 'utf8');
                console.log(finalContents);
            } catch (error) {
                console.error(`[ERROR] Could not read file: ${error.message}`);
            }
            console.log("-----------------------------------");

            // Close the readline interface and end program
            rl.close();
        });
    });
});
