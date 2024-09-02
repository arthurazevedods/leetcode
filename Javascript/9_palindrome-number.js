//ACCEPT

var isPalindrome = function(x) {
    
    let text = x.toString();
    return text == text.split('').reverse().join('');
    
    
};