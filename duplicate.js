function findDuplicates(arr) {
  // Create an empty object to store the count of each element
  const countMap = {};

  // Array to store the duplicate values
  const duplicates = [];

  // Iterate through the array
  for (const value of arr) {
    // If the element is not in the countMap, add it with a count of 1
    if (!countMap[value]) {
      countMap[value] = 1;
    } else {
      // If the element is already in the countMap, it's a duplicate
      // Add it to the duplicates array if not already present
      if (countMap[value] === 1) {
        duplicates.push(value);
      }
      // Increment the count for the element
      countMap[value]++;
    }
  }

  return duplicates;
}

// Example usage:
const myArray = [1, 2, 3, 4, 2, 5, 6, 1, 7, 8, 7, 7, 8, 8, 8];
const duplicateValues = findDuplicates(myArray);
console.log("Duplicate Values:", duplicateValues);
