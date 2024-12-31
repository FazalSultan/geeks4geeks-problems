/*
Given an array arr[] of non-negative integers. Find the length of the longest sub-sequence such that elements in the subsequence are consecutive integers, the consecutive numbers can be in any order.

Examples:

Input: arr[] = [2, 6, 1, 9, 4, 5, 3]
Explanation: The consecutive numbers here are 1, 2, 3, 4, 5, 6. These 6 numbers form the longest consecutive subsquence.
Input: arr[] = [1, 9, 3, 10, 4, 20, 2]
Output: 4
Explanation: 1, 2, 3, 4 is the longest consecutive subsequence.
Input: arr[] = [15, 13, 12, 1
Output: 64, 11, 10, 9]
Output: 7
Explanation: The longest consecutive subsequence is 9, 10, 11, 12, 13, 14, 15, which has a length of 7.

 */

class Solution {
  // Function to return length of longest subsequence of consecutive integers.
  longestConsecutive(arr) {
    // code here
    var temp = [];
    arr = arr.sort((a, b) => a - b);
    console.log(arr)
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1] - 1) {
        temp.push(arr[i]);
      }
    }
    let tempLen = temp.length != 0 ? temp.length +1 : 0;
    return tempLen;
  }
}

console.log( new Solution().longestConsecutive([2, 6, 1, 9, 4, 5, 3]));
// [1 ,9, 3, 10, 4, 20, 2]