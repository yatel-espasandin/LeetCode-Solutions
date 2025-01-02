# Problem 35: Search Insert Position

**Difficulty:** Easy  
**Topic:** Binary Search  
**Lenguage Used:** Javascript  
**Link:** [Search Insert Position on LeetCode](https://leetcode.com/problems/search-insert-position/)

## Problem Description
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

## Approach
Use binary search to find the target or its insertion position.

- **Time Complexity:** O(log n)  
- **Space Complexity:** O(1)  

## Test Cases
```javascript
console.log(searchInsert([1, 3, 5, 6], 5)); // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2)); // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7)); // Output: 4
```


## Walkthrough
- 1 - Initialize two pointers: index at the start and end at the last element
- 2 - Calculate the middle point
- 3 - If the middle element is the target, return its index
- 4 - If middle element is less than target, search right half
- 5 - If middle element is greater than target, search left half
- 6 - If pointers cross, return the index which represents the insertion point


Additional Notes

The key insight is that when we can't find the target, the final index value indicates where the target should be inserted.  
This is an efficient solution as it uses binary search, making it logarithmic in time complexity.
