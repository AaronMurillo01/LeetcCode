/**
 * Brute Force - Linear Search
 * Time O(N^2) | Space O(1)
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
     let uniqueElements = new Set();
     for(let num of nums) {
         if (uniqueElements.has(num)) {
             return true;
         } else {
             uniqueElements.add(num);
         }
     }
    
    return false;
 }

 //Example usage: 
 const nums1= [1, 2, 3, 1];
 console.log(containsDuplicate(nums1)); // Output: true
 
 const nums2 = [1, 2, 3, 4];
 console.log(containsDuplicate(nums2)); //Output: false

 const nums3 = [1, 1, 1, 3, 3, 4, 3, 2, 4,  2];
 console.log(containsDuplicate(nums3)); //Output: true
