var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length-1;
    let result=nums.length;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        if(nums[mid]>=target){
            result=mid;
            right=mid-1;
        }else{
            left=mid+1;
        }
    }
    return result;
};

/*
var searchInsert = function(nums, target) {
    return nums.filter(item => item < target).length;
};
*/

/*
var searchInsert = function(nums, target) {
    let i = 0
    while(i<nums.length){
        if(nums[i] == target || nums[i] > target){
            return i
        }
        i++
    }
    return nums.length
};
*/