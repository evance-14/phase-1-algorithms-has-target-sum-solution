function hasTargetSum(array, target) {
  // Write your algorithm here
  // create an object to keep track of numbers we have already seen.
  const seenNumbers = {};
  // iterate through each number in the array
  for(let i = 0; i < array.length; i++) {
    //for the current num, identify a complement that adds to the target (comp = target - num)
    const complement = target - array[i];
    // check if any key on our object is the complement
    // if so return true
    if (seenNumbers[complement]) return true;
    // otherwise add that number to the object
    seenNumbers[array[i]] = true;
  }
  // if i reach the end of the array, return false.
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([ 4, 11, 7], 18));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 4, 11, 7], 19));

  console.log("");
}

module.exports = hasTargetSum;
