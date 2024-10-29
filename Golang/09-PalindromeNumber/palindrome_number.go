package main

import "strconv"

func isPalindrome(x int) bool {
	s := strconv.Itoa(x) // Converte o número para string
	for i := 0; i < len(s)/2; i++ {
		if s[i] != s[len(s)-1-i] {
			return false
		}
	}
	return true
}
