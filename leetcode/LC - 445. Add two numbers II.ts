/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let stackL1 = [];
    let stackL2 = [];
    let current = l1;
    while(current != null) {
        stackL1.push(current.val);
        current = current.next;
    }

    current = l2;
    while(current != null) {
        stackL2.push(current.val);
        current = current.next;
    }

    let carry = 0;
    let sum = 0;
    let ans: number[] = [];

    
    let head = null;
    while (stackL1.length > 0 || stackL2.length > 0 || carry > 0) {

        sum = carry + (stackL1.pop() ?? 0) + (stackL2.pop() ?? 0);

        carry = Math.floor(sum / 10); // storing MSD as carry. to be used in next iteration.
        let newNode = new ListNode(sum % 10); // putting least significant digit.
        
        newNode.next = head;
        head = newNode;

    }

    return head;
};
