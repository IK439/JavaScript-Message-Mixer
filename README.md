# JavaScript-Message-Mixer

## Description
This project contains two Node.js programs for encrypting and decrypting messages using multiple cipher techniques.  
- **Message Mixer:** Allows users to encrypt messages using a Caesar cipher, symbol cipher, or word-reversal cipher.  
- **Super Encoder:** Combines multiple ciphers (Caesar, symbol, reverse) to encode and decode messages with enhanced security.

## Coding Techniques
- **Caesar Cipher:** Implements letter shifting with support for uppercase and lowercase letters.  
- **Symbol Cipher:** Maps certain letters to symbols and vice versa, preserving case where applicable.  
- **Reverse Cipher:** Reverses each word in a sentence while maintaining word order.  
- **Command-Line Interface:** Processes user input from the terminal and dynamically selects encryption/decryption methods.  
- **Modular Design:** Cipher functions are exported in `encryptors.js` for reuse across multiple programs.  
- **Function Composition:** `super-encoder.js` demonstrates combining multiple ciphers for layered encoding/decoding.

## Example Output

### Message Mixer
```
$ node message-mixer.js caesar 3
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> khoor zruog
$ node message-mixer.js symbol
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> h3110 w0r1d
$ node message-mixer.js reverse
Enter the message you would like to encrypt...
> hello world

Here is your encrypted message:
> olleh dlrow
```

### Super Encoder
```
$ node super-encoder.js encode
Enter the message you would like to encrypt...
> Hello World
> 3@rr0H g0rZ
```
```
$ node super-encoder.js decode
Enter the message you would like to decrypt...
> 3@rr0H g0rZ
> Hello World

```
