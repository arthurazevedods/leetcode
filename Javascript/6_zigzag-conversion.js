/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    let rows = new Array(numRows).fill('');
    let curr = 0;
    let down = false;

    for (let i = 0; i < s.length; i++) {
        rows[curr] += s[i]; 
        if (curr === 0 || curr === numRows - 1) {
            down = !down;
        }
        curr += down ? 1 : -1;
    }
    
    return rows.join('');
};