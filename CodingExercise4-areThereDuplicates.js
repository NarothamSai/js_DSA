/**
 *
 * Frequency Counter / Multiple Pointers - areThereDuplicates
 *
 * Implement a function called, areThereDuplicates which accepts a variable
 *  number of arguments, and checks whether there are any duplicates
 * among the arguments passed in. You can solve using the frequency counter
 * pattern OR the multiple pointers pattern.
 *
 * Examples:
 *      areThereDuplicates(1, 2, 3) // false
 *      areThereDuplicates(1, 2, 2) // true
 *      areThereDuplicates('a', 'b', 'c', 'a') // true
 *
 * Restrictions:
 * Time - O(n)
 * Space - O(n)
 *
 * Bonus:
 * Time - O(nlogn)
 * Space - O(1)
 */

function areThereDuplicates() {
  // Get arguments
  let args = Array.from(arguments);
  // Initialise the counter object
  let counter = {};
  //Loop over arguments array
  args.forEach((elem) => {
    // If element in array exists in counter,
    // increment the value or intilize to 1
    counter[elem] = ++counter[elem] || 1;
  });
  //Loop over counter object
  for (let elem in counter) {
    // If any elemnt value is greater than 1 return false
    if (counter[elem] > 1) return true;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicatesPointer(1, 2, 3));
console.log(areThereDuplicatesPointer(1, 2, 2));
console.log(areThereDuplicatesPointer("a", "b", "c", "a"));
console.log(areThereDuplicatesOneliner(1, 2, 3));
console.log(areThereDuplicatesOneliner(1, 2, 2));
console.log(areThereDuplicatesOneliner("a", "b", "c", "a"));

function areThereDuplicatesPointer(...args) {
  // Sort the arguments array
  args.sort((a, b) => a > b);
  //Initialize first pointer to 0 and second pointer to 1
  let first = 0,
    second = 1;
  // while loop upto arguments length
  while (second < args.length) {
    //if element at first and second pointer is same, return true
    if (args[first] === args[second]) return true;
    first++;
    second++;
    //Increment first and second pointer
  }

  return false;
}

function areThereDuplicatesOneliner() {
  // create new set with arguments
  //  check the size of set and arguments length
  return new Set(arguments).size !== arguments.length;
}
