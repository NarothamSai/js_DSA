/**
 * Frequency Counter - same Frequency
 *
 * Write a function called sameFrequency. Given two positive integers,
 * find out if the two numbers have the same frequency of digits.
 *
 * Your solution MUST have the following complexities:
 *
 * Time: O(N)
 *
 * Sample Input:
 *      sameFrequency(182,281) // true
 *      sameFrequency(34,14) // false
 *      sameFrequency(3589578,5879385) // true
 *      sameFrequency(22,222) // false
 */

function calculateCountOfDigits(num) {
  let countDigits = {};
  let remainder;
  while (num) {
    remainder = num % 10;
    num = Math.floor(num / 10);
    // console.log(remainder + ":" + num);
    countDigits[remainder] = ++countDigits[remainder] || 1;
  }
  return countDigits;
}

function sameFrequency(num1, num2) {
  let countDigits1 = calculateCountOfDigits(num1);
  let countDigits2 = calculateCountOfDigits(num2);

  for (let elem in countDigits1) {
    if (countDigits2[elem] == countDigits1[elem]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));
