var licenseKeyFormatting = function(s, k) {
    let count = 0
    let arr = ''
    for (let i = s.length-1; i>=0;i--){
        if (s[i] != '-'){
            if (count == k){
                arr = '-'.concat(arr)
                count = 0
            }
           arr = s[i].concat(arr)
           count++
        }
    }
    return arr.toUpperCase()
};