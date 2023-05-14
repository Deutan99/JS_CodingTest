let curr = head;
let prev = null;

while (curr) {
    if (hash.has(curr.val)) {
        prev.next = curr.next;
    } else {
        hash.add(curr.val);
        prev = curr;
    }
    curr = curr.next;
}

return head;