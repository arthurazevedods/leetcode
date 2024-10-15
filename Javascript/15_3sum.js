var threeSum = function(nums) {
    if (nums.length < 3) { // Requer pelo menos 3 elementos
        return [];
    } else if (nums.length === 3 && nums.reduce((a, b) => a + b, 0) === 0) { 
        return [nums];
    }
    nums = nums.sort((a, b) => a - b); // Ordena os números (O(nlogn))

    let res = [];
    let i = 0;

    while (i < nums.length - 2) {  // Menos 2 porque precisa de 3 elementos
        if (i > 0 && nums[i] === nums[i - 1]) { // Ignora duplicados
            i++;
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;
        let target = 0 - nums[i];

        while (j < k) {
            // Ignora duplicados
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                j++;
                continue;
            }
            // Ignora duplicados
            if (k < nums.length - 1 && nums[k] === nums[k + 1]) {
                k--;
                continue;
            }

            let jkSum = nums[j] + nums[k];
            if (jkSum === target) { // Encontrou um par
             res.push([nums[i], nums[j], nums[k]]);
            }

            if (jkSum > target) {
                k--;
            } else {
                j++;
            }
        }

        i++;
    }
    return res;
};