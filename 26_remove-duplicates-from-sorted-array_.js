var removeDuplicates = function(nums) {
    const set = new Set(nums)
    nums.length = 0
    nums.push(...set)
    return nums.length
};