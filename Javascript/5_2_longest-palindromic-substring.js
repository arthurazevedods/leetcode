function longestPalindrome(s) {
    if (s.length <= 1) return s;
    let longest = "";
    // Função para expandir a partir do centro e verificar o palíndromo
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        // Verifica palíndromos com centro em um único caractere (ex: "aba")
        let oddPalindrome = expandAroundCenter(i, i);

        // Verifica palíndromos com centro em dois caracteres (ex: "abba")
        let evenPalindrome = expandAroundCenter(i, i + 1);

        // Determina o maior palíndromo entre o atual e os anteriores
        let currentLongest = oddPalindrome.length > evenPalindrome.length ? oddPalindrome : evenPalindrome;
        if (currentLongest.length > longest.length) {
            longest = currentLongest;
        }
    }

    return longest;
}
