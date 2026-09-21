// 1. Select the target HTML elements using their IDs
const targetElement = document.getElementById('targetElement');
const attrStatus = document.getElementById('attrStatus');

// 2. Select all the buttons
const contentBtn = document.getElementById('changeContentBtn');
const styleBtn = document.getElementById('changeStyleBtn');
const attrBtn = document.getElementById('changeAttrBtn');
const resetBtn = document.getElementById('resetBtn');

// --- DEMONSTRATION 1: Changing Content Dynamically ---
contentBtn.addEventListener('click', () => {
    // We use the textContent property to change the text inside the element
    targetElement.textContent = "Hello! The content was changed dynamically!";
});

// --- DEMONSTRATION 2: Changing Style Dynamically ---
styleBtn.addEventListener('click', () => {
    // We can access inline styles through the .style property
    targetElement.style.backgroundColor = "#28a745"; // Green color
    targetElement.style.color = "white";
    targetElement.style.borderRadius = "30px";
    targetElement.style.border = "4px dashed darkgreen";
    
    // Also updating text so it matches the vibe
    targetElement.textContent = "Styles applied!";
});

// --- DEMONSTRATION 3: Changing Attributes Dynamically ---
attrBtn.addEventListener('click', () => {
    // Changing the 'title' attribute (hover over the box to see it)
    targetElement.setAttribute('title', 'This title was updated by JavaScript!');
    
    // Changing the 'id' or adding an attribute
    targetElement.setAttribute('data-modified', 'true');
    
    // Retrieve and display the new attribute to prove it changed
    const newTitle = targetElement.getAttribute('title');
    attrStatus.textContent = `Attribute updated! Hover over the box. New title attribute is: "${newTitle}"`;
});

// --- RESET FUNCTIONALITY ---
resetBtn.addEventListener('click', () => {
    // Reset Content
    targetElement.textContent = "I am the original text.";
    
    // Reset Styles (empty string removes the inline style)
    targetElement.style.backgroundColor = "";
    targetElement.style.color = "";
    targetElement.style.borderRadius = "";
    targetElement.style.border = "";
    
    // Reset Attributes
    targetElement.setAttribute('title', 'I am a box');
    targetElement.removeAttribute('data-modified');
    attrStatus.textContent = "";
});
