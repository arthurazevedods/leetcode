var halvesAreAlike = function(s) {
    const vowels = "aeiouAEIOU";
    let num = 0
    for (let i=0; i<s.length/2; i++){
        if (vowels.includes(s[i])) num++
    }
    for (let i=s.length/2; i<s.length; i++){
        if (vowels.includes(s[i])) num--
    }
    if (num == 0) return true
    return false
};