/*
Usage Examples:

1. Encode a message:
   node super-encoder.js encode
   Then type your message after the prompt.

2. Decode a message:
   node super-encoder.js decode
   Then type your message after the prompt.
*/

// Import the three cipher functions from encryptors.js
const {
  caesarCipher,
  symbolCipher,
  reverseCipher,
} = require("./encryptors.js");

/* 
Function to encode a message using multiple ciphers:
1. Caesar cipher with shift 4
2. Symbol cipher
3. Reverse cipher
*/
const encodeMessage = (str) => {
  return reverseCipher(symbolCipher(caesarCipher(str, 4)));
};

/* 
Function to decode a message by reversing the encoding steps:
1. Reverse cipher
2. Symbol cipher
3. Caesar cipher with shift -4
*/
const decodeMessage = (str) => {
  return caesarCipher(symbolCipher(reverseCipher(str)), -4);
};

// --------------------
// User input / output logic
// --------------------

/* 
Handles user input from the terminal:
- Trims the message
- Checks if the user wants to encode or decode
- Applies the appropriate function
- Prints the result and exits
*/
const handleInput = (userInput) => {
  const str = userInput.toString().trim();
  let output;

  if (process.argv[2] === "encode") {
    output = encodeMessage(str);
  } else if (process.argv[2] === "decode") {
    output = decodeMessage(str);
  } else {
    // Invalid command handling
    process.stdout.write('Invalid mode. Use "encode" or "decode".\n');
    process.exit();
  }

  process.stdout.write(output + "\n");
  process.exit(); // End program after displaying result
};

// Prompt the user based on the mode they chose
if (process.argv[2] === "encode") {
  process.stdout.write("Enter the message you would like to encrypt...\n> ");
  process.stdin.on("data", handleInput);
}

if (process.argv[2] === "decode") {
  process.stdout.write("Enter the message you would like to decrypt...\n> ");
  process.stdin.on("data", handleInput);
}