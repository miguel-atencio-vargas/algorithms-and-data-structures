
/**
 * Definition for singly-linked list.
 * }
 */

class ListNode {
  constructor(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsOld = function (list1, list2) {
  if (!list1 || !list2) return list1 || list2;

  let result;
  let currentA = list1;
  let currentB = list2;


  if (currentA.val <= currentB.val) {
    result = [currentA.val];
    currentA = currentA.next;
  } else {
    result = [currentB.val];
    currentB = currentB.next;
  }

  while (currentA != null || currentB != null) {
    if (currentA == null) {
      result.unshift(currentB.val);
      currentB = currentB.next;
      continue;
    }
    if (currentB == null) {
      result.unshift(currentA.val);
      currentA = currentA.next;
      continue;
    }

    if (currentA.val >= currentB.val) {
      result.unshift(currentB.val);
      currentB = currentB.next || null;
    } else {
      result.unshift(currentA.val);
      currentA = currentA.next || null;
    }
    
  }

  return result.reduce((head, curr) => {
    const newNode = new ListNode(curr, head);
    return newNode;
  }, new ListNode(result.shift(), null));
};




var mergeTwoLists = (list1, list2) => {
  // For some reason (maybe the clousures) it is more effiecient  to create the recursive fn inside the main fn
  var merge = (headA, headB) => {
    if (headA == null) return headB;
    if (headB == null) return headA;
  
    if (headA.val < headB.val) {
      headA.next = mergeTwoLists(headA.next, headB);
      return headA;
    } else {
      headB.next = mergeTwoLists(headA, headB.next);
      return headB;
    }
  }
  merge(list1, list2);
}


// const head1 = null;
// const head2 = new ListNode(0, null);

// let result = mergeTwoLists(head1, head2);
// console.log('⛳️ | result:', JSON.stringify(result, null, 2));

const head1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const head2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

let result = mergeTwoLists(head1, head2);
console.log('⛳️ | result:', JSON.stringify(result, null, 2));

