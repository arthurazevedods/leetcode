package main

import "fmt"

// ListNode defines a singly-linked list.
type ListNode struct {
	Val  int
	Next *ListNode
}

/*A resolução é somente a função addTwoNumbers*/
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	if l1 == nil && l2 == nil {
		return nil
	}

	dummyHead := &ListNode{}
	current := dummyHead
	carry := 0

	for l1 != nil || l2 != nil {
		val1 := 0
		if l1 != nil {
			val1 = l1.Val
			l1 = l1.Next
		}

		val2 := 0
		if l2 != nil {
			val2 = l2.Val
			l2 = l2.Next
		}

		sum := val1 + val2 + carry
		carry = sum / 10
		current.Next = &ListNode{Val: sum % 10}
		current = current.Next
	}

	if carry > 0 {
		current.Next = &ListNode{Val: carry}
	}

	return dummyHead.Next
}

// Função que cria uma lista encadeada do slice
func createLinkedList(values []int) *ListNode {
	if len(values) == 0 {
		return nil
	}
	head := &ListNode{Val: values[0]}
	current := head
	for _, val := range values[1:] {
		current.Next = &ListNode{Val: val}
		current = current.Next
	}
	return head
}

// Imprimir a Lista
func printLinkedList(head *ListNode) {
	for head != nil {
		fmt.Print(head.Val)
		if head.Next != nil {
			fmt.Print(" -> ")
		}
		head = head.Next
	}
	fmt.Println()
}

func main() {
	// Example usage
	l1 := createLinkedList([]int{2, 4, 3}) // Represents the number 342
	l2 := createLinkedList([]int{5, 6, 4}) // Represents the number 465

	result := addTwoNumbers(l1, l2)
	printLinkedList(result) // Should print 7 -> 0 -> 8 (Represents the number 807)
}
