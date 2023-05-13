function removeDuplicates(head) {
  if (!head || !head.next) {
    return head;
  }

  let cur = head;
  while (cur) {
    let prev = cur;
    let next = cur.next;
    while (next) {
      if (next.val === cur.val) {
        prev.next = next.next;
        next = prev.next;
      } else {
        prev = next;
        next = next.next;
      }
    }
    cur = cur.next;
  }

  return head;
}
