/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function (nums) {
    if (!(nums[0] + nums[1] > nums[2])) return "none"
    if (!(nums[0] + nums[2] > nums[1])) return "none"
    if (!(nums[2] + nums[1] > nums[0])) return "none"
    const trisides = new Set(nums);
    if (trisides.size == 1) return "equilateral";
    else if (trisides.size == 2) return "isosceles";
    else return "scalene"
};