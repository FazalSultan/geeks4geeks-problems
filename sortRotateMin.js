/* A sorted array of distinct elements arr[] is rotated at some unknown point, the task is to find the minimum element in it. 

Examples:

Input: arr[] = [5, 6, 1, 2, 3, 4]
Output: 1
Explanation: 1 is the minimum element in the array.
Input: arr[] = [3, 1, 2]
Output: 1
Explanation: Here 1 is the minimum element.
Input: arr[] = [4, 2, 3]
Output: 2
Explanation: Here 2 is the minimum element.

*/


// User function Template for javascript
/**
 * @param {number[]} arr
 * @returns {number}
 */
class Solution {
    findMin(arr) {
        return Math.min(...arr)
    }
}

console.log( new Solution().findMin([1,2,3,4,5,8]))

