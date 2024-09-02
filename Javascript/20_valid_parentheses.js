/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = new Array();
    for(let i = 0; i < s.length; i++) {
        let curr = s[i]
        if(curr == "(" || curr == "{" || curr == "[") {
            stack.push(curr);
        }
        else {
            let top = stack[stack.length - 1];
            if(stack.length == 0) return false
            if(top == "[" && curr != "]") return false
            if(top == "{" && curr != "}") return false
            if(top == "(" && curr != ")") return false
            stack.pop();
        }
    }
    return stack.length == 0
};