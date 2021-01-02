/**
 * Multiple Pointers - averagePair
 *
 * Write a function called averagePair. Given a sorted array of
 * integers and a target average, determine if there is a pair of
 * values in the array where the average of the pair equals the
 * target average. There may be more than one piair that matches
 * the average target.
 *
 * Bonus constraints:
 * Time: O(N)
 * Space: O(1)
 *
 * Sample Input:
 *      averagePair([1,2,3],2.5) // true
 *      averagePair([1,3,3,5,6,7,10,12,19],8) //true
 *      averagePair([-1,0,3,4,5,6],4.1) //false
 *      averagePair([],4) // false
 */

function averagePair(arr, target_average) {
  if (arr.length < 2) return false;
  let sum_target_average_pair = target_average * 2;

  if (Number.isInteger(sum_target_average_pair)) {
    let first_point = 0;
    let second_point = arr.length - 1;
    let sum_pair = 0;
    while (first_point != second_point) {
      sum_pair = arr[first_point] + arr[second_point];
      if (sum_pair === sum_target_average_pair) return true;
      else if (sum_pair > sum_target_average_pair) second_point--;
      else first_point++;
    }
    return false;
  } else {
    return false;
  }
}

console.log(averagePair([1, 2, 3], 2.5));
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1));
console.log(averagePair([], 4));
