package main

import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {

	// Comece com o array de menor tamanho para otimizar a busca binária
	if len(nums1) > len(nums2) {
		nums1, nums2 = nums2, nums1
	}

	m, n := len(nums1), len(nums2)
	low, high := 0, m

	// A ideia principal é realizar uma busca binária e mover o ponto de separação
	// para garantir que todos os itens à esquerda sejam menores que os à direita do ponto.
	for low <= high {
		partitionX := (low + high) / 2       // índice da separação no array menor
		partitionY := (m+n+1)/2 - partitionX // índice da separação no array maior

		// Definir os valores à esquerda e à direita da separação
		l1 := math.MinInt64
		if partitionX > 0 {
			l1 = nums1[partitionX-1] // maior valor à esquerda em nums1
		}

		r1 := math.MaxInt64
		if partitionX < m {
			r1 = nums1[partitionX] // menor valor à direita em nums1
		}

		l2 := math.MinInt64
		if partitionY > 0 {
			l2 = nums2[partitionY-1] // maior valor à esquerda em nums2
		}

		r2 := math.MaxInt64
		if partitionY < n {
			r2 = nums2[partitionY] // menor valor à direita em nums2
		}

		// Se as condições de partição estiverem corretas
		if l1 <= r2 && l2 <= r1 {
			// Se o número total de elementos for par
			if (m+n)%2 == 0 {
				return (float64(max(l1, l2)) + float64(min(r1, r2))) / 2.0
			}
			// Se for ímpar, a mediana é o maior valor à esquerda
			return float64(max(l1, l2))
		} else if l1 > r2 {
			// Ajuste para mover a partição para a esquerda
			high = partitionX - 1
		} else {
			// Ajuste para mover a partição para a direita
			low = partitionX + 1
		}
	}

	// Retorno em caso de erro (não deveria ocorrer se as entradas forem válidas)
	return 0.0
}
