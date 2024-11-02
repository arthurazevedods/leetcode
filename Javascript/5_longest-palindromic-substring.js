/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {

    let longest = ''; // Inicializa uma string vazia para armazenar o palíndromo mais longo

    for (let i = 0; i < s.length; i++) {
        // Palíndromos de comprimento ímpar
        let left = i;
        let right = i;
        console.log('\ncomeço do for\n\ti:',i, '\n\tleft:',left,'\n\tright:',right,'\n\tlongest:',longest)
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Verifica se o palíndromo atual é maior que o anterior
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }

        // Palíndromos de comprimento par
        left = i;
        right = i + 1;
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // Verifica se o palíndromo atual é maior que o anterior
            if (right - left + 1 > longest.length) {
                longest = s.substring(left, right + 1);
            }
            left--;
            right++;
        }
    }

    return longest;

};

let str = longestPalindrome('babad');
console.log("babad:", str);

str = longestPalindrome('cbbd');
console.log("\cbbd:", str);
