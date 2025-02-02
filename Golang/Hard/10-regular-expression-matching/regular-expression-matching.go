package main

func isMatch(s string, p string) bool {
	n := len(s)
	m := len(p)

	// Programação Dinâmica
	// Crie uma tabela com as dimensões(n+1) x (m+1)
	dp := make([][]bool, n+1)
	for i := range dp {
		dp[i] = make([]bool, m+1)
	}

	// Empty string matches empty pattern
	// String vazia dar match com pattern vazio
	dp[0][0] = true

	// Lidar com patterns com '*' que podem corresponder a zero ocorrências
	for j := 1; j <= m; j++ {
		if p[j-1] == '*' && dp[0][j-2] {
			dp[0][j] = true
		}
	}

	// Preencha a tabela
	for i := 1; i <= n; i++ {
		for j := 1; j <= m; j++ {
			if p[j-1] == '.' || p[j-1] == s[i-1] {
				dp[i][j] = dp[i-1][j-1]
			} else if p[j-1] == '*' {
				// Ocorrência zero do elemento anterior
				dp[i][j] = dp[i][j-2]
				// Uma ou mais ocorrências do elemento anterior
				if p[j-2] == '.' || p[j-2] == s[i-1] {
					dp[i][j] = dp[i][j] || dp[i-1][j]
				}
			}
		}
	}

	return dp[n][m]
}
