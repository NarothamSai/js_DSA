/**
 *
 * Given an array of integers and a number, write a function called
 * maxSubarraySum, which finds the maximum sum of a subarray with the
 * length of the number passed to the function.
 *
 * Note that a subarray must consist of consecutive elements from
 * the original array. In the first example below, [100,200,300] is
 * a sub array of the original array, but [100,300] is not.
 *
 *      maxSubarraySum([100,200,300,400],2) // 700
 *      maxSubarraySum([1,4,2,10,23,3,1,0,20],4) // 39
 *      maxSubarraySum([-3,4,0,-2,6,-1],2) // 5
 *      maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
 *      maxSubarraySum([2,5],3) // null
 *
 * Constraints:
 * Time Complexity - O(N)
 * Space Complexity - O(1)
 */

function maxSubarraySum(arr, subArrLen) {
  // Return null if subArrLen is greater than arr length
  if (subArrLen > arr.length) return null;
  let max_sum = 0;
  let sum = 0;
  // Find sum for subArrLen elemnts of arr
  for (let ctr = 0; ctr < subArrLen; ctr++) {
    sum += arr[ctr];
  }
  max_sum = sum;
  // Loop upto arr length - subArrLen
  for (let ctr = 1; ctr <= arr.length - subArrLen; ctr++) {
    // Add next element and substract first element
    sum = sum + arr[ctr + subArrLen - 1] - arr[ctr - 1];
    // Check the max value
    max_sum = Math.max(sum, max_sum);
  }
  return max_sum;
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4));
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2));
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2));
console.log(maxSubarraySum([2, 5], 3));
