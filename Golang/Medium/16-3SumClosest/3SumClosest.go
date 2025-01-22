package main

import "slices"

// Função para encontrar a soma de três números em nums que é mais próxima de target.
func threeSumClosest(nums []int, target int) int {
	// Ordena o array nums em ordem crescente para facilitar a iteração com dois ponteiros
	slices.Sort(nums)

	// Inicializa a resposta com a soma dos três primeiros números
	res := nums[0] + nums[1] + nums[2]

	// Calcula a diferença inicial entre a soma e o alvo (target)
	minmax := max(res, target) - min(res, target)

	// Variável que armazena a soma mais próxima encontrada
	total := res

	// Loop principal que percorre cada elemento do array
	for i := 0; i < len(nums); i++ {
		// Define dois ponteiros, um logo após o índice atual e outro no final do array
		p1 := i + 1
		p2 := len(nums) - 1

		// Enquanto os dois ponteiros não se cruzarem
		for p1 < p2 {
			// Calcula a soma dos três números atuais
			if sum := nums[i] + nums[p1] + nums[p2]; sum < target {
				// Se a soma for menor que o alvo, move o ponteiro da esquerda para a direita
				res = sum
				p1++
			} else if sum > target {
				// Se a soma for maior que o alvo, move o ponteiro da direita para a esquerda
				res = sum
				p2--
			} else {
				// Se a soma for exatamente igual ao alvo, retorna o alvo diretamente
				return target
			}

			// Atualiza a soma mais próxima e a menor diferença, se aplicável
			if max(res, target)-min(res, target) < minmax {
				minmax = max(res, target) - min(res, target)
				total = res
			}
		}
	}

	// Retorna a soma mais próxima encontrada
	return total
}
