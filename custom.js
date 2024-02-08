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
// 3 nmb
function filterNumbers(arr) {
    // Filter out non-numeric elements and convert valid numbers to numbers
    const filteredArray = arr.filter(item => typeof item === 'number' && !isNaN(item));

    return filteredArray;
}
let see = ['b', 'nmbm', 5, 6, 88, 9];
console.log(filterNumbers(see));

