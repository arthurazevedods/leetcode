var lengthOfLongestSubstring = function(s) {
    let charSet = new Set();  // Conjunto para armazenar caracteres da substring atual
    let left = 0;             // Início da janela (ponto inicial da substring)
    let maxLength = 0;        // Comprimento máximo da substring sem repetições

    for (let right = 0; right < s.length; right++) {
        // Enquanto o caractere no final da janela já estiver no conjunto, remover o caractere do início da janela
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);  // Remove o caractere do lado esquerdo da janela
            left += 1;                // Move o início da janela para a direita
        }
        // Adiciona o caractere atual ao conjunto e atualiza o comprimento máximo
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
};