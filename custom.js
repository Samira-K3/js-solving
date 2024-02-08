// 2 nmb
function checkName(name) {
    // Convert the name to lowercase for case-insensitive comparison
    const lowercaseName = name.toLowerCase();
    
    // Define an array of letters to check for
    const endingLetters = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    // Get the last character of the name
    const lastCharacter = lowercaseName.charAt(lowercaseName.length - 1);

    // Check if the last character is one of the specified letters
    if (endingLetters.includes(lastCharacter)) {
        return "Good name";
    } else {
        return "Bad name";
    }
}

console.log(checkNameEnding("Emily")); // Output: Good name
console.log(checkNameEnding("John")); // Output: Bad name
console.log(checkNameEnding("Henry")); // Output: Good name
