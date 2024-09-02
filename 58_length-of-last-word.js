var lengthOfLastWord = function (s) {
    var strs = s.split(' ');
    var pos = strs.length - 1
    while (pos > -1) {
        if (strs[pos].length > 0) {
            return strs[pos].length
        } else {
            pos -= 1
        }
    }
};
