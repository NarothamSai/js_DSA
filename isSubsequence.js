/**
 * Multiple Pointers - isSubsequence
 *
 * Write a function called isSubsequence which takes in two strings
 *  and checks whether the characters in the first string form a
 * subsequence of the characters in the substring. In other words,
 *  the function shuld check whether the characters in the first
 * string appear somewher in the second string, without their order
 * changing.
 *
 * Examples:
 *      isSubsequence('hello','hello world'); // true
 *      isSubsequence('sing','sting'); // true
 *      isSubsequence('abc','abracadabra'); // true
 *      isSubsequence('abc','acb'); // false (order matters)
 *
 * Your solution MUST have AT LEAT the following complexities:
 * Time complexity - O(N + M)
 * Space Complexity - O(1)
 */

function isSubsequence(str1, str2) {
  if (str1.length > str2.length) return false;

  let first_pointer = 0,
    second_pointer = 0;
  while (second_pointer < str2.length) {
    if (str1[first_pointer] === str2[second_pointer]) {
      first_pointer++;
      second_pointer++;
    } else second_pointer++;
    if (first_pointer === str1.length) return true;
  }
  return false;
}

console.log(isSubsequence("hello", "hello world"));
console.log(isSubsequence("sing", "sting"));
console.log(isSubsequence("abc", "abracadabra"));
console.log(isSubsequence("abc", "acb"));
