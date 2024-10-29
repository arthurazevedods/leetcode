/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let curr = digits.length - 1; 
    let carry = 1; 
    
    while (curr >= 0) {
        digits[curr] += carry;
        
        if (digits[curr] === 10) { 
            digits[curr] = 0;
            carry = 1;
        } else {
            carry = 0; 
            break;
        }
        
        curr--; 
    }
    
    if (carry === 1) {
        digits.unshift(1); 
    }

    return digits;
};