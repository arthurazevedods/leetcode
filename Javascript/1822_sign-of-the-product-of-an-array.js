/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let p = nums[0]
    for (let i=1;i<nums.length;i++){
        p *= nums[i]
    }
    if(p>0) {return 1}
    else if(p<0) {return -1}
    return 0
};