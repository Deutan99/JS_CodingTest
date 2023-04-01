/**
 * @param {number[]} nums
 * @return {boolean}
 */
 
function containsDuplicate (nums) {
    const arr = new Set(nums);
    if(arr.size !== nums.length) {
        return true;
    } else {
        return false;
    }
};