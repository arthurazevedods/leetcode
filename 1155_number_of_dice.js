//Accept

// Define uma função chamada numRollsToTarget com parâmetros n, k e target
var numRollsToTarget = function(n, k, target) {
    // Define uma constante MOD com o valor 10^9 + 7
    const MOD = 10**9 + 7;

    // Inicializa uma matriz 2D dp com dimensões (n + 1) x (target + 1) e preenche com zeros
    
    const result = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));

    // Caso base: uma maneira de obter uma soma de 0 com 0 dados
    result[0][0] = 1;

    // Itera sobre o número de dados
    for (let i = 1; i <= n; i++) {
        // Itera sobre as somas possíveis #1
        for (let j = 1; j <= target; j++) {
            // Itera sobre cada face do dado #5
            for (let face = 1; face <= k; face++) { //#6
                // Verifica se é possível alcançar a soma atual com a face atual
                if (j - face >= 0) {
                    // Atualiza o número de maneiras de alcançar a soma atual com o número atual de dados                    
                    // result[i][j] representa o número de maneiras de obter a soma j usando i dados.
                    // result[i - 1][j - face] representa o número de maneiras de obter a soma j - face usando i - 1 dados, ou seja, considerando um dado a menos.
                    // result[i][j] + result[i - 1][j - face] é a soma dessas duas quantidades, indicando o número total de maneiras de obter a soma j considerando o último dado com face face.
                    // % MOD é usado para garantir que o valor não ultrapasse um determinado limite (no caso, 10^9 + 7), mantendo a resposta dentro dos limites desejados.
                    result[i][j] = (result[i][j] + result[i - 1][j - face]) % MOD;
                }
            }
        }
    }

    // Retorna o result, que representa o número de maneiras de alcançar a soma desejada
    return result[n][target];
}

// Exemplos de uso:
console.log(numRollsToTarget(1, 6, 3));  // Saída: 1
console.log(numRollsToTarget(2, 6, 7));  // Saída: 6
console.log(numRollsToTarget(30, 30, 500));  // Saída: 222616187
