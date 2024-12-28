/*
Given a sorted array of distinct positive integers arr[], we need to find the kth positive number that is missing from arr[].  

Examples :

Input: arr[] = [2, 3, 4, 7, 11], k = 5
Output: 9
Explanation: Missing are 1, 5, 6, 8, 9, 10… and 5th missing number is 9.
Input: arr[] = [1, 2, 3], k = 2
Output: 5
Explanation: Missing are 4, 5, 6… and 2nd missing number is 5.
Input: arr[] = [3, 5, 9, 10, 11, 12], k = 2
Output: 2
Explanation: Missing are 1, 2, 4, 6… and 2nd missing number is 2.
 */

// User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} k
 * @returns {number}
 */

class Solution {
    kthMissing(arr, k) {
     let missingNumber = [];
     let startNumber = 1; // Start checking from 1
     let index = 0; // Pointer for the array
 
     while (missingNumber.length < k) {
         if (arr[index] !== startNumber) {
             missingNumber.push(startNumber);
         } else {
             // If the current number is found in the array, move to the next element in the array
             index++;
         }
         startNumber++; // Increment the number to check next
     }
 
     return missingNumber[k - 1];
 }
 }