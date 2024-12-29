/*
Given two integer arrays a[] and b[], you have to find the intersection of the two arrays. Intersection of two arrays is said to be elements that are common in both arrays. The intersection should not have duplicate elements and the result should contain items in any order.

Note: The driver code will sort the resulting array in increasing order before printing.

Examples:

Input: a[] = [1, 2, 1, 3, 1], b[] = [3, 1, 3, 4, 1]
Output: [1, 3]
Explanation: 1 and 3 are the only common elements and we need to print only one occurrence of common elements.
Input: a[] = [1, 1, 1], b[] = [1, 1, 1, 1, 1]
Output: [1]
Explanation: 1 is the only common element present in both the arrays.
Input: a[] = [1, 2, 3], b[] = [4, 5, 6]
Output: []
Explanation: No common element in both the arrays.
 */

/**
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
class Solution {
    intersectionWithDuplicates(a, b) {
        // code here
        var  j=0;
        var res =[];
        for(let i= 0 ; i< a.length ;i++){
            if(a.includes(a[i]) && b.includes(b[j])){
                if(!res.includes(a[i]) && !res.includes(b[j])){
                    res.push(a[i])
                }
            }
            j++;
        }
        return res;

    }
}

/*
    ------------------------------OPTIMIZE VERSION----------------------------------
  
class Solution {
    intersectionWithDuplicates(a, b) {
         const setA = new Set(a); // Store unique elements from array `a`
         const setB = new Set(b); // Store unique elements from array `b`
         const result = [];
 
         // Find the intersection
         for (const num of setA) {
             if (setB.has(num)) {
                 result.push(num);
             }
         }
 
         return result; 
     }
 }
 */


console.log(new Solution().intersectionWithDuplicates([1, 1, 1] , [1, 1, 1, 1, 1]))