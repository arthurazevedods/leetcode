package main

import "sort"

func threeSum(nums []int) [][]int {
	res := [][]int{}

	if len(nums) < 3 {
		return res
	} else if len(nums) == 3 {
		count := 0
		for i := 0; i < len(nums); i++ {
			count += nums[i]
		}
		if count == 0 {
			res = append(res, []int{nums[0], nums[1], nums[2]})
			return res
		}
	}

	sort.Ints(nums) //ordena o array

	//o laço vai terminar no penúltimo elemento
	for i := 0; i < len(nums)-2; i++ {
		if i == 0 || (i > 0 && nums[i] != nums[i-1]) {
			low := i + 1          // o menor
			high := len(nums) - 1 // maior número
			sum := 0 - nums[i]    // a soma é iniciada pelo elemento atual

			// para  low sendo menor que o high
			for low < high {
				//se a soma do menor com o maior for igual ao atual elemento
				if nums[low]+nums[high] == sum {
					res = append(res, []int{nums[i], nums[low], nums[high]}) // adiciona na lista
					// para  low sendo menor que o high
					// e low sendo igual ao low+1 (elemento a direita)

					for low < high && nums[low] == nums[low+1] {
						low++ // incrementa o indíce de low
					}
					// para  low sendo menor que o high
					// e low sendo igual ao low+1 (elemento a direita)
					for low < high && nums[high] == nums[high-1] {
						high-- // decrementa o indíce de high
					}
					low++  // incrementa o indíce de low
					high-- // decrementa o indíce de high
				} else if nums[low]+nums[high] > sum {
					high-- // senão se a soma de low e high for maior que o atual, decrementa high
				} else {
					low++ // senão incrementa o indíce de low
				}
			}
		}
	}

	return res

}
