/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(head) {
    const stack = [head]; // 스택을 생성하고 루트 노드를 스택에 추가
    while (stack.length) { // 스택이 비어질 때까지 반복
        const node = stack.pop(); // 스택에서 노드를 꺼낸다.
        if (node != null) { // 현재 노드가 null이 아닌 경우, 즉 실제 노드인 경우 다음 작업을 수행
            stack.push(node.left); // 현재 노드의 왼쪽 자식 노드를 스택에 추가
            stack.push(node.right); // 현재 노드의 오른쪽 자식 노드를 스택에 추가
            const tmp = node.left; // 현재 노드의 왼쪽 자식 노드를 임시 변수에 저장
            node.left = node.right; // 현재 노드의 왼쪽 자식을 오른쪽 자식으로 변경
            node.right = tmp; // 현재 노드의 오른쪽 자식을 임시 변수의 값으로 변경
        }
    }
    return head;
};
