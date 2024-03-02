/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let count = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (str2.startsWith(words[i]) && str2.endsWith(words[i])) {
                count++;
            }
        }
    }
    return count;
};