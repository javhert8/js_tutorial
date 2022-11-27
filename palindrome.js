// Reverses a string.
let reverse = (string) => {
    return string.split("").reverse().join("");
}

// Returns true for a palindrome, false otherwise.
let palindrome = (string) => {
    let processedContent = string.toLowerCase();
    return processedContent === reverse(processedContent);
}
