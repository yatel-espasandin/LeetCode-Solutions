/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let index = 0;
    let end = nums.length -1;
    let bin = function(index, end){
        let mid = Math.floor((index + end) / 2);
        if(index > end){
            return index
        }
        if(nums[mid] === target){
            return mid;
        }else{
            if(nums[mid] < target){
                return bin(mid + 1, end)
            }else{
                return bin(index, mid -1)
            }
        }
    }
    return bin(index, end)
};