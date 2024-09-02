var maxAscendingSum = function(nums) {
    let prev = nums[0]
    let seq = nums[0]
    let sum = nums[0]
    for (let i=1;i<nums.length;i++){
        if(nums[i]>prev){
            seq+=nums[i]
        }else{
            seq = nums[i]
        }
        sum = Math.max(sum,seq);
        prev=nums[i]
    }
    return sum
};