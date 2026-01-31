// This file exports three ciphers: caesarCipher, symbolCipher, reverseCipher

/* 
Caesar cipher: shifts letters by a given amount.
Non-letter characters are left unchanged.
Supports both uppercase and lowercase letters.
*/
const caesarCipher = (str, amount = 0) => {
  // Handle negative shifts and wrap around 26 letters
  amount = ((amount % 26) + 26) % 26;

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char.match(/[a-z]/i)) { // Check if character is a letter
      let code = str.charCodeAt(i);
      if (code >= 65 && code <= 90) {
        // Uppercase letters A-Z
        char = String.fromCharCode(((code - 65 + amount) % 26) + 65);
      } else if (code >= 97 && code <= 122) {
        // Lowercase letters a-z
        char = String.fromCharCode(((code - 97 + amount) % 26) + 97);
      }
    }
    output += char; // Add character to output
  }
  return output;
};

/* 
Symbol cipher: replaces certain letters with symbols and vice versa.
- Letters in the encodeMap are converted to symbols.
- Symbols in the decodeMap are converted back to letters.
- Other characters remain unchanged.
*/
const symbolCipher = (str) => {
  // Map letters to symbols
  const encodeMap = {
    i: "!",
    l: "1",
    s: "$",
    o: "0",
    a: "@",
    e: "3",
    b: "6",
  };

  // Reverse map for decoding symbols back to letters
  const decodeMap = {};
  for (let key in encodeMap) {
    decodeMap[encodeMap[key]] = key;
  }

  let output = "";
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If character is a letter to encode
    if (char.toLowerCase() in encodeMap) {
      let mapped = encodeMap[char.toLowerCase()];
      // Preserve case only for letters -> symbols
      output += char === char.toUpperCase() ? mapped.toUpperCase() : mapped;
    }
    // If character is a symbol to decode
    else if (char.toLowerCase() in decodeMap) {
      let mapped = decodeMap[char.toLowerCase()];
      output += mapped; // Always lowercase when decoding
    }
    // Leave other characters unchanged
    else {
      output += char;
    }
  }

  return output;
};

/* 
Reverse cipher: reverses each word in a sentence, preserving word order.
Example: "Hello world" -> "olleH dlrow"
*/
const reverseCipher = (sentence) => {
  let words = sentence.split(" "); // Split sentence into words
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join(""); // Reverse each word
  }
  return words.join(" "); // Join words back into a sentence
};

// Export all cipher functions for use in other files
module.exports = {
  caesarCipher,
  symbolCipher,
  reverseCipher,
};