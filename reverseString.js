
function reverseString(str) {
  // Convert string to an array
  let arr = str.split('');
  
  // Use a loop to swap characters
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    
    // Swap characters
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  
  // Convert array back to a string and return
  return arr.join('');
}

const str = 'komal';
console.log(reverseString(str)); 
  