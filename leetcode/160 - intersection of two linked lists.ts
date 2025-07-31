function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    
    let currentA = headA;
    let currentB = headB;

    while (currentA != currentB) { // exits the loop when we are the same node, whether a node or null.
        currentA = currentA ? currentA.next : headB;
        currentB = currentB ? currentB.next : headA;
    }

    return currentA;
};