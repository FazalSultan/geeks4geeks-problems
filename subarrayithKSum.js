/*
Given an unsorted array of integers, find the number of continuous subarrays having sum exactly equal to a given number k.

Examples:

Input: arr = [10, 2, -2, -20, 10], k = -10
Output: 3
Explaination: Subarrays: arr[0...3], arr[1...4], arr[3...4] have sum exactly equal to -10.
Input: arr = [9, 4, 20, 3, 10, 5], k = 33
Output: 2
Explaination: Subarrays: arr[0...2], arr[2...4] have sum exactly equal to 33.
Input: arr = [1, 3, 5], k = 0
Output: 0
Explaination: No subarray with 0 sum.



class Solution {
    countSubarrays(arr, k) {
        let temp =[];
        for(let i=0 ;i <arr.length; i++){
            let currCounter =0;
            for(let j =i +1 ; j<arr.length ;j++){
                currCounter = currCounter + arr[j];
                if(arr[i]+ currCounter  == k){
                    temp.push(arr.slice(i , j+1));
                    break;
                }
            }
        }
        console.log(temp.length);
    }
}
 */

// --------------------------OPTIMIZE VERSION----------------------------

class Solution {
    countSubarrays(arr, k) {
        let temp =[];
        for(let i=0 ;i <arr.length; i++){
            let currCounter =0;
            for(let j =i ; j<arr.length ;j++){
                currCounter = currCounter + arr[j];
                if(currCounter  == k){
                    temp.push(arr.slice(i , j+1));
                    break;
                }
            }
        }
        console.log(temp.length);
    }
}



new Solution().countSubarrays([
    497, 82, 171, 384, 136, 220, 333, 153, 129, 431, 266, 381, 28, 46, 82, 202, 
    250, 34, 447, 149, 300, 267, 131, 332, 354, 448, 477, 402, 191, 410, 65, 114, 
    491, 156, 495, 139, 237, 352, 123, 14, 359, 111, 488, 92, 418, 285, 42, 338, 
    330, 359, 142, 150, 386, 126, 63, 440, 364, 301, 328, 404, 72, 442, 267, 126, 
    489, 365, 360, 428, 35, 44, 202, 54, 175, 414, 297, 476, 372, 110, 377, 331, 
    207, 459, 322, 261, 378, 366, 152, 139, 320, 299, 413, 347, 184, 232, 157, 111, 
    494, 426, 41, 79, 382, 273, 371, 370, 177, 86, 265, 400, 85, 127, 432, 182, 
    340, 343, 386, 278, 42, 447, 407, 453, 234, 440, 45, 182, 23, 57, 170, 185, 
    192, 443, 259, 392, 158, 251, 150, 217, 217, 264, 175, 240, 84, 247, 270, 282, 
    173, 407, 107, 78, 444, 368, 199, 406, 262, 266, 175, 210, 149, 125, 35, 53, 
    18, 336, 337, 284, 112, 158, 154, 83, 131, 240
  ],370)