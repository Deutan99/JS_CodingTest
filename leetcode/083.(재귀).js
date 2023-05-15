var deleteDuplicates = function(head) {
    if (!head || !head.next) {
        return head;
    }
    
    if (head.val === head.next.val) {
        head = deleteDuplicates(head.next);
    } else {
        head.next = deleteDuplicates(head.next);
    }
    
    return head;
};