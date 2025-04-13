function longestUniqueSubstring(str) {
    let maxLength = 0;      // To store the maximum length of substring found
    let start = 0;          // The starting index of the current window
    let charIndexMap = {};  // To store the last index of every character encountered
    let longestSubstring = ""; // To store the longest substring without repeating characters

    for (let end = 0; end < str.length; end++) {
        const currentChar = str[end];

        // If the character is already in the map and is within the current window
        if (charIndexMap[currentChar] >= start) {
            // Move the start to the right of the last occurrence of the current character
            start = charIndexMap[currentChar] + 1;
        }

        // Update the last index of the current character
        charIndexMap[currentChar] = end;

        // Check if the current window is the longest we've seen so far
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = str.substring(start, end + 1);
        }
    }

    console.log("The length of the longest substring without repeating characters is:", maxLength);
    console.log("The longest substring without repeating characters is:", longestSubstring);
}

// Example usage
const inputString = "abcabcbb";
longestUniqueSubstring(inputString);
