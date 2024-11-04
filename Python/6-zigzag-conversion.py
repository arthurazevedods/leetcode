class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or len(s) <= numRows:
            return s

        rows = [''] * numRows
        curr = 0
        down = False

        for i in s:
            rows[curr] += i  
            if curr == 0 or curr == numRows - 1:  
                down = not down
            curr += 1 if down else -1

        return ''.join(rows)
