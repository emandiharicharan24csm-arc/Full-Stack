// Get all the HTML elements we need to interact with
const nameInput = document.getElementById('productName');
const priceInput = document.getElementById('productPrice');
const quantityInput = document.getElementById('productQuantity');
const displayName = document.getElementById('displayName');
const displayTotal = document.getElementById('displayTotal');

// Function to calculate and update the total price
function calculateTotal() {
    // Get the values from the inputs
    // We use parseFloat for price to handle decimals, and parseInt for quantity
    const price = parseFloat(priceInput.value) || 0; 
    const quantity = parseInt(quantityInput.value) || 0;
    let name = nameInput.value;
    
    // Default to 'Product' if the user hasn't typed a name
    if (name.trim() === '') {
        name = 'Product';
    }

    // Calculate total
    const total = price * quantity;

    // Update the HTML display
    displayName.textContent = name;
    
    // .toFixed(2) ensures the total has 2 decimal places (e.g., 10.50)
    displayTotal.textContent = total.toFixed(2);
}

// Add event listeners to trigger the calculation whenever the input changes
// The 'input' event fires every time the user types or changes the value
nameInput.addEventListener('input', calculateTotal);
priceInput.addEventListener('input', calculateTotal);
quantityInput.addEventListener('input', calculateTotal);

// Run calculation initially to set the default state on page load
calculateTotal();
