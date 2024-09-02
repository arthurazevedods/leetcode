var longestCommonPrefix = function(strs) {
    let prefix = "";
    

    for (let i=0; i < strs[0].length; i++){ 
        const str = strs[0][i] 

        for (let j = 1; j < strs.length; j++){ 

            if(strs[j][i] !== str) {
                return prefix;
            }
        }
        prefix = prefix + str
    }

    return prefix
};