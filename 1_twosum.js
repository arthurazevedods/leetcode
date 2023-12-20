//accept

/*
143ms
*/
var twoSum = function(nums, target) {
    let first;
    let second;
    
    for (let i = 0; i < nums.length; i++){
        first = nums[i];
        for (let j = 0; j < nums.length; j++){
            second = nums[j];
            if (i != j){
                if ((first + second) == target ){
                    let listNums = [i,j];
                    return listNums ;
                }
            }
        }
    }
};

/*
56 ms
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i = 0; i < nums.length; i++){
        const complement = target - nums[i]
        if(map.has(complement)){
            return [map.get(complement),i]
        }map.set(nums[i],i)
    }
};
*/