


class ListNode {
    constructor(val, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  function isPalindrome(head) {
    // Create a stack to store values
    const stack = [];
    let current = head;
  
    // Traverse the linked list and push values onto the stack
    while (current !== null) {
      stack.push(current.val);
      current = current.next;
    }
  
    // Reset current to the head of the linked list
    current = head;
  
    // Compare values from the stack with values in the linked list
    while (stack.length > 0) {
      if (stack.pop() !== current.val) {
        return false;
      }
      current = current.next;
    }
  
    return true;
  }
  