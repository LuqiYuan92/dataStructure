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
var invertTree = function (root) {
  //dfs preorder traversal
  if (root) {
    //store the reference to the right node
    let temp = root.right;
    root.right = invertTree(root.left);
    root.left = invertTree(temp);
  }
  return root;
};
