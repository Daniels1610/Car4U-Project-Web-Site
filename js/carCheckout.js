// CREDIT CARD INPUT AND VALIDATION
// Get the input field
const cardNumberInput = document.getElementById('cc-number');

// Add event listener for input changes
cardNumberInput.addEventListener('input', formatCardNumber);

// Function to format the card number
function formatCardNumber() {
    let value = cardNumberInput.value;

    value = value.replace(/\D/g, '');

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    cardNumberInput.value = value;
}
