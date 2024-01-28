var removeElement = function(nums, val) {
    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[count++] = nums[i] 
        }
    }
    return count
};
/*
var removeElement = function (nums, val) {
    let [i,k] = [0,0]
    while (i < nums.length) {
        if (nums[i] !== val) {
            nums[k++] = nums[i]
        }
        i++
    }
    return k
};
*/