function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var isSameTree = function (p, q) {
    if (p == null && q == null) {
        return true;
    }
    if (p == null || q == null) {
        return false;
    }

    if (p.val !== q.val) {
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);

};


var two = new TreeNode(2);

var three = new TreeNode(3);
var one =  new TreeNode(1);

var t1 = new TreeNode(1);
t1.left = two;
t1.right = null;
// t1.right = three;

var t2 =  new TreeNode(1);
t2.right = two;
t2.left = null;
// t2.right = three;

var res = isSameTree( t1, t2);

console.log(res);

