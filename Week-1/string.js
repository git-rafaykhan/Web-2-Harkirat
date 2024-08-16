// JavaScript String Methods Assignment Questions

// Calculate String Length
//! Question: Write a function calculateStringLength that takes a string as input and returns its length.
function calculateStringLength(str) {
    console.log("String is: ", str);
    console.log("String Length is: ", str.length);
}

calculateStringLength("Hello");
calculateStringLength("Hello World"); // spaces are also part of the length

// Find First Occurrence Index
//! Question: Write a function findFirstOccurrenceIndex that takes a string and a substring as input, and returns the index of the first occurrence of the substring within the string. If the substring is not found, return -1.
function findFirstOccurrenceIndex(str, sub) {
    console.log(`String is ${str} and Substring is ${sub}`);
    console.log("First Occurrence Index:", str.indexOf(sub));
}

findFirstOccurrenceIndex("hello", "w");
findFirstOccurrenceIndex("hello World", "World");

// Find Last Occurrence Index
//! Question: Write a function findLastOccurrenceIndex that takes a string and a substring as input, and returns the index of the last occurrence of the substring within the string. If the substring is not found, return -1.
function findLastOccurrenceIndex(str, sub) {
    console.log(`String is ${str} and Substring is ${sub}`);
    console.log("Last Occurrence Index:", str.lastIndexOf(sub));
}

findLastOccurrenceIndex("hello", 'e');
findLastOccurrenceIndex("helloow", "w");

// Extract Portion Using slice()
//! Question: Write a function extractUsingSlice that takes a string, a start index, and an end index as input. Return the portion of the string between the start and end indices using the slice() method.
function extractUsingSlice(str, start, end) {
    console.log(`String is ${str}, Start Index: ${start}, End Index: ${end}`);
    console.log("Extracted Portion Using slice:", str.slice(start, end));
}

extractUsingSlice("Hello World", 0, 5);
extractUsingSlice("JavaScript", 4, 10);

// Extract Portion Using substring()
//! Question: Write a function extractUsingSubstring that takes a string, a start index, and an end index as input. Return the portion of the string between the start and end indices using the substring() method.
function extractUsingSubstring(str, start, end) {
    console.log(`String is ${str}, Start Index: ${start}, End Index: ${end}`);
    console.log("Extracted Portion Using substring:", str.substring(start, end));
}

extractUsingSubstring("Hello World", 0, 5);
extractUsingSubstring("JavaScript", 4, 10);

// Replace Substring
//! Question: Write a function replaceSubstring that takes a string, a target substring, and a replacement substring as input. Return a new string where all occurrences of the target substring are replaced with the replacement substring.
function replaceSubstring(str, target, replacement) {
    console.log(`String is ${str}, Target: ${target}, Replacement: ${replacement}`);
    console.log("String After Replacement:", str.replace(target, replacement));
}

replaceSubstring("Hello World", "World", "JavaScript");
replaceSubstring("hello hello", "hello", "hi");

// Split String into Array
//! Question: Write a function splitStringIntoArray that takes a string and a separator as input. Return an array of substrings obtained by splitting the string based on the separator.
function splitStringIntoArray(str, separator) {
    console.log(`String is ${str}, Separator: ${separator}`);
    console.log("Array of Substrings:", str.split(separator));
}

splitStringIntoArray("Hello World", " ");
splitStringIntoArray("apple,banana,orange", ",");

// Trim Whitespace
//! Question: Write a function trimStringWhitespace that takes a string with leading and trailing whitespace and returns the trimmed version of the string.
function trimStringWhitespace(str) {
    console.log("Original String:", str);
    console.log("Trimmed String:", str.trim());
}

trimStringWhitespace("   Hello World   ");
trimStringWhitespace("   JavaScript   ");

// Convert String to Uppercase
//! Question: Write a function convertStringToUpperCase that takes a string as input and returns the string in uppercase.
function convertStringToUpperCase(str) {
    console.log("Original String:", str);
    console.log("Uppercase String:", str.toUpperCase());
}

convertStringToUpperCase("Hello World");
convertStringToUpperCase("JavaScript");

// Convert String to Lowercase
//! Question: Write a function convertStringToLowerCase that takes a string as input and returns the string in lowercase.
function convertStringToLowerCase(str) {
    console.log("Original String:", str);
    console.log("Lowercase String:", str.toLowerCase());
}

convertStringToLowerCase("Hello World");
convertStringToLowerCase("JavaScript");

// Complex String Manipulation
//! Question: Write a function manipulateString that performs the following operations on a given string:
// 1. Trim whitespace.
// 2. Convert to uppercase.
// 3. Replace a specified substring with another substring.
// 4. Split the result into an array using a specified separator.
// 5. Return the final result.
function manipulateString(str, target, replacement, separator) {
    let trimmed = str.trim();
    let uppercased = trimmed.toUpperCase();
    let replaced = uppercased.replace(target, replacement);
    let splitResult = replaced.split(separator);
    console.log("Final Result After Manipulation:", splitResult);
}

manipulateString("   hello world   ", "WORLD", "JavaScript", " ");
manipulateString("   apple banana orange   ", "banana", "kiwi", " ");

// Compare Substrings
//! Question: Write a function compareSubstrings that takes a string and two substrings as input. Check if both substrings exist in the string and return their indices. If either substring is not found, return -1 for that substring.
function compareSubstrings(str, sub1, sub2) {
    let index1 = str.indexOf(sub1);
    let index2 = str.indexOf(sub2);
    console.log(`String is ${str}`);
    console.log(`Index of '${sub1}':`, index1);
    console.log(`Index of '${sub2}':`, index2);
}

compareSubstrings("Hello World", "Hello", "World");
compareSubstrings("JavaScript Programming", "JavaScript", "Python");
