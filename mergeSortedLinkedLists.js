// definition for a singly-linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === null ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function mergeTwoLists(list1, list2) {
  let res = new ListNode();
  let head = res;

  // compare two list node until one of the is finished

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      head.next = list1;
      list1 = list1.next;
    } else {
      head.next = list2;
      list2 = list2.next;
    }
    head = head.next;
  }

  // add non-finished list elements
  while (list1 !== null) {
    head.next = list1;
    list1 = list1.next;
    head = head.next;
  }

  while (list2 !== null) {
    head.next = list2;
    list2 = list2.next;
    head = head.next;
  }

  return res.next;
}

mergeTwoLists();
