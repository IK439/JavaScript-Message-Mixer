/*
Usage Examples:

1. Caesar cipher with shift 3:
   node message-mixer.js caesar 3
   Then type your message after the prompt.

2. Symbol cipher:
   node message-mixer.js symbol
   Then type your message after the prompt.

3. Reverse cipher:
   node message-mixer.js reverse
   Then type your message after the prompt.
*/

// Import encryption functions
const encryptors = require("./encryptors.js");

// Assign each cipher function to a variable for easy use
const caesarCipher = encryptors.caesarCipher;
const symbolCipher = encryptors.symbolCipher;
const reverseCipher = encryptors.reverseCipher;

// --------------------
// User Input / Output Logic
// --------------------

// Determine which encryption method to use based on command-line args
const encryptionMethod = getEncryptionMethod();

// Listen for user input from the terminal
process.stdin.on("data", (userInput) => {
  // Trim input and check for empty message
  if (!userInput.toString().trim()) {
    process.stdout.write("Please enter a non-empty message.\n> ");
    return;
  }

  // Encrypt the message and display it
  displayEncryptedMessage(encryptionMethod, userInput);
});

/* 
Determine which cipher the user selected when running the program.
Returns a function that can be used to encrypt a string.
*/
function getEncryptionMethod() {
  let encryptionMethod;

  const encryptionType = process.argv[2]; // e.g., "caesar", "symbol", or "reverse"
  if (encryptionType === "symbol") {
    encryptionMethod = symbolCipher;
  } else if (encryptionType === "reverse") {
    encryptionMethod = reverseCipher;
  } else if (encryptionType === "caesar") {
    // Get shift amount from command-line argument
    let amount = Number(process.argv[3]);
    if (Number.isNaN(amount)) {
      process.stdout.write(`Try again with a valid amount argument. \n`);
      process.exit(); // Exit program if shift is invalid
    }
    // Wrap caesarCipher with the specified shift amount
    encryptionMethod = (str) => caesarCipher(str, amount);
  } else {
    process.stdout.write(`Try again with a valid encryption type. \n`);
    process.exit(); // Exit program if encryption type is invalid
  }

  // Prompt user to enter their message
  process.stdout.write("Enter the message you would like to encrypt...\n> ");
  return encryptionMethod;
}

/* 
Encrypts the user's message and displays the result.
*/
function displayEncryptedMessage(encryptionMethod, userInput) {
  let str = userInput.toString().trim(); // Remove extra whitespace
  let output = encryptionMethod(str);    // Encrypt the message
  process.stdout.write(`\nHere is your encrypted message:\n> ${output}\n`);
  process.exit(); // End program after displaying result
}