 const greetingInput = document.getElementById("greeting-input");
 const changeButton = document.getElementById("change-button");
 const greetingDisplay = document.getElementById("greeting-display");
 
 changeButton.addEventListener('click', () => {
    greetingDisplay.textContent =  greetingInput.value;
 });