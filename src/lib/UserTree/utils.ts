import type {TreeNode} from "@/lib/UserTree/type";

export function traverseTree(node: TreeNode, callback: any) {
    if (node.children) {
        node.children.forEach(child => {
            traverseTree(child, callback);
        });
    }
    callback(node);
}
// traverse nodeList
export function traverseNodeList(nodeList: TreeNode[], callback: any) {
    nodeList.forEach(node => {
        traverseTree(node, callback);
    });
}




//get all checked nodes from nodeList
export function getCheckedNodes(nodeList: TreeNode[]) {
    let checkedNodes: TreeNode[] = [];
    nodeList.forEach(node => {
        if (node.checked) {
            checkedNodes.push(node);
        }
        if (node.children) {
            checkedNodes = checkedNodes.concat(getCheckedNodes(node.children));
        }
    });
    return checkedNodes;
}