//Linklist (reverse,traverse), binary tree (dfs(preorder, inodrder, post order), BFS, iteratively,recursively ) BST, N-ary Tree/Trie
//144.94.145 Binary Tree Preorder/Inorder/Postorder Traversal
//102. Binary Tree Level Order Traversalvar
//103. Binary Tree Zigzag Level Order Traversal
//637. Average of Levels in Binary Tree
//116. Populating Next Right Pointers in Each Node
//105.106.889 Construct Binary Tree from Preorder&InO /Ino&PostO /PreO&PostO
//226. Invert Binary Tree
//104. Maximum Depth of Binary Tree
//101. Symmetric Tree t/f?
//236. Lowest Common Ancestor of a Binary Tree/(root,p,q)p q are nodes
//652. Find Duplicate Subtrees
//297. Serialize and Deserialize Binary Tree into array
//543. Diameter of Binary Tree(find longest path,not have to include root node)
//112. Path Sum(root,targetsum)t/f? need to reach end of node
//113. Path Sum II(root,targetsum)list all path w/ array
//437. Path Sum III(root,targetsum) find the count/need not reach end of node(smimlar to leetcode 560)
//110. Balanced Binary Tree,t/f?(root)
//108. Convert Sorted Array to Binary Search Tree(array)
 //98. Validate Binary Search Tree(root)t/f?
//450. Delete Node in a BST(root,key)return root;
//987.  Vertical Order Traversal of a Binary Tree
//230. Kth Smallest Element in a BST
//1448 Count Good Nodes in Binary Tree
//199. Binary Tree Right Side View
//124. Binary Tree Maximum Path Sum//!newly added

//tires/ tries is connected hash table// 0(n+L) linear for constructing , n is number of word, L is avg length of words/ same as hash table but with prefix ability
{b:{a:{d:{end:true}}}}
//208. Implement Trie (Prefix Tree) 




//         a
//    b        c
// d    e     f    g 
//h i  j     k l
//pre(NLR); abdhiejcfklg/use stack, 
//in(LNR);  hdibjeakflcg
//pos(LRN);  hidjebklfcga
// class TreeNode{ constructor(x){  this.val=x; this.left=null;  this.right=null }}
//****************************************************************************************************************** */
//144. Binary Tree Preorder Traversal
var preorderTraversal = function(root) {//stack
  let arr=[root];
  let ans=[]
  while(arr[0]){
    let x=arr[0]
    arr.shift()
    ans.push(x.val)
    if(x.right){arr.unshift(x.right)}
    if(x.left){arr.unshift(x.left)}
  }
  return ans
  };
var preorderTraversal = function(root) {//traversal
    let arr=[]
    let ans=[]
    let cur=root;
    while(cur||arr.length){
  if(cur){
    arr.unshift(cur)
    ans.push(cur.val)
      cur=cur.left
  }
  else{cur=arr.shift();cur=cur.right
  }
    }
  return ans
  };
var preorderTraversal2 = function(root) { //recurssive
  let ans = [];
  function pot(node) {
      if(node) {
          ans.push(node.val);
          if(node.left) {   pot(node.left);  }
          if(node.right) {   pot(node.right);  }
      } 
  }
  pot(root);
  return ans;
};
var preorderTraversal3 = function solution(root) {
  if (!root)  return []; 
  return [root.val, ...solution(root.left), ...solution(root.right)];
};
//94. Binary Tree Inorder Traversal
var inorderTraversal = function(root) {
  debugger;
  if(!root){
    return []
  }
    return [...inorderTraversal(root.left),root.val,...inorderTraversal(root.right) ]
};
var inorderTraversal2 = function(root) {
  let ans=[]
function plot(x){
    if(x){
  if(x.left){plot(x.left)}
 ans.push(x.val)
  if(x.right){plot(x.right)}}
}
plot(root)
return ans
};
var inorderTraversal3 = function (root) {
  let arr = [root];
  let ans = [];
if(!root){return ans}
  while (arr.length) {//use arr.length to avoid val:0
    let x = arr[0];
    arr.shift();
    if (x.val || x.val === 0) {// avoid val:0
      if (x.right) {
        arr.unshift(x.right);
      }
      arr.unshift(x.val);
      if (x.left) {
        arr.unshift(x.left);
      }
    } else {
      ans.push(x);
    }
  }
  return ans;
};
var inorderTraversal4 = function(root) {
  let arr=[]
  let ans=[]
    let curr = root;
    while (arr.length||curr) {
      if (curr) {
       arr.unshift(curr);  
       curr = curr.left;
      } else {  
        curr = arr.shift(); 
      ans.push(curr.val)
      curr = curr.right;  
      }  
    }
    return ans
  };
//145. Binary Tree Postorder Traversal
var postorderTraversal = function(root) {
if(!root){return []};
return [...postorderTraversal(root.left),...postorderTraversal(root.right),root.val]
};
var postorderTraversal = function(root) {
  let arr=[root]
  let ans=[]
  if(!root) return ans
      while(arr.length){
  let x=arr.pop()
  ans.unshift(x.val)
  if(x.left){arr.push(x.left)}
  if(x.right){arr.push(x.right)}
  }
  return ans
 
  };
var postorderTraversal3 = function(root) {

  let arr=[]
  let ans=[]
  let cur=root;
  while(arr.length||cur){
  if(cur){
    arr.unshift(cur)
    ans.unshift(cur.val)
    cur=cur.right;
  }else{
  cur=arr.shift()
  cur=cur.left
  }
  
  }
  return ans
  
  };
  //102. Binary Tree Level Order Traversalvar
  var levelOrder = function(root) {
    if(!root)return []//!!! important!!
  let q=[root];
  let row=[]
  let ans=[];
  let rowV=[]
  while(q.length){
let x= q.shift();
  if(x.val)rowV.push(x.val)
  if(x.left)row.push(x.left)
  if(x.right)row.push(x.right)

  if(!q.length){q.push(...row);row=[];ans.push(rowV);rowV=[]}
  //!!! wtf not push([..row]) its push(row)!!watch out push(..x)vs push([...x])vs push(x)vs push([x])
  }
  return ans
  };
  //103. Binary Tree Zigzag Level Order Traversal
  var zigzagLevelOrder = function(root) {
    let arr=[root]
    let level=[]
    let ansl=[]
    let ans=[]
    let leftright=true;
        if(!root) return ans
    while(arr.length){
    let x=arr.shift()
    if(leftright)
    {ansl.push(x.val)}else{ansl.unshift(x.val)}
    if(x.left){level.push(x.left)}
    if(x.right){level.push(x.right)}
    if(!arr.length){
    arr=level;
    level=[];
    ans.push(ansl)
    ansl=[]
    leftright=!leftright
    }
    }
    return ans
    };
//637. Average of Levels in Binary Tree
var averageOfLevels = function(root) {
  let arr=[root]
  let level=[]
  let sum=0
  let count=0
  let ans=[]
      if(!root) return ans
  while(arr.length){
  let x=arr.shift()

 sum+=x.val;count++
  if(x.left){level.push(x.left)}
  if(x.right){level.push(x.right)}
  if(!arr.length){
  arr=level;
  level=[];
  ans.push(sum/count)
 sum=0;count=0
  }
  }
  return ans
  };
//116. Populating Next Right Pointers in Each Node
//!!dont worry about the last node in row
var connect = function(root) {
  let arr=[root]
  let level=[]
      if(!root) return root
  while(arr.length){
  let x=arr.shift()
  if(x.left){level.push(x.left)}
  if(x.right){level.push(x.right)}
  if(!arr.length){
  for(i=0;i<level.length-1;i++){level[i].next=level[i+1]}//!!make sure stop before the end
  arr=level;
  level=[];
  }
  }
  return root;
  }; 
//N/A/117 javascrpt submittion problem. Populating Next Right Pointers in Each Node II//
//105. Construct Binary Tree from Preorder and Inorder Traversal
//    1
//   / \
//  2   3
// / \   \
//4   5   6
// preorder: 1 (2 4 5) [3 6]
// inorder: (4 2 5) 1 [3 6]
//105. Construct Binary Tree from Preorder and Inorder Traversal
var buildTree = function(preorder, inorder) {
  if(!preorder.length||!inorder.length)return null;//!!have to return null, cant be just return
  let v=preorder.shift()
  let i=inorder.indexOf(v)
let n=new TreeNode(v)
n.left=buildTree(preorder.slice(0,i),inorder.slice(0,i))
n.right=buildTree(preorder.slice(i),inorder.slice(i+1))
return n;
      }
var buildTree2 = function(preorder, inorder) {
let map=new Map;
inorder.forEach((x,y)=>map.set(x,y))
return build(0, inorder.length-1);
  
function build(L,R){
  if(L<=R){
let val=preorder.shift()
let root=new TreeNode(val)
root.left=build(L,map.get(val)-1)
root.right=build(map.get(val)+1,R)

return root
  }
  else {return null}
}
    }
//226. Invert Binary Tree
var invertTree = function(root) {
  if(!root)return null;
  let inv=new TreeNode(root.val);
  inv.left=invertTree(root.right);
  inv.right=invertTree(root.left);
return inv;
};

var invertTree = function(root) {
  if(!root)return null;
let L=root.left;
let R=root.right;
root.left=L;
root.right=R;
invertTree(root.left)
invertTree(root.right)

};
var invertTree2 = function(root) {
  if(!root)return null;
let L=root.left;
let R=root.right;
root.left=R;
root.right=L;
invertTree(root.left)
invertTree(root.right)
return root;
};
//104. Maximum Depth of Binary Tree
var maxDepth = function(root) {
  if(!root)return 0;
  let L=maxDepth(root.left)
  let R=maxDepth(root.right)
  return Math.max(L,R)+1
    
};
//101. Symmetric Tree
var isSymmetric = function (root) {//!return is manipulation of two different recussion
  if (!root) return true;
  return dfs(root.left, root.right);//!!need to use dfs for two variable

  function dfs(x, y) {
    if (!x && !y) return true;
    if ((!x && y) || (x && !y) || x.val != y.val) return false;
    return dfs(x.left, y.right) && dfs(x.right, y.left);//!!!very important trick!!
  }
};

//106. Construct Binary Tree from Inorder and Postorder Traversal
var buildTree = function(inorder, postorder) {
  if(!inorder.length)return null;//!! dont forget ! in the base case wtf!!
  let v=postorder.pop();
  let i=inorder.indexOf(v);
  let n=new TreeNode(v);
  n.left=buildTree(inorder.slice(0,i),postorder.slice(0,i))
  n.right=buildTree(inorder.slice(i+1),postorder.slice(i))
  return n;
    };
//889. Construct Binary Tree from Preorder and Postorder Traversal
var constructFromPrePost = function(pre, post) {
  if(!pre.length)return null;
  let v=pre.shift();post.pop();
  let i=post.indexOf(pre[0]);
  let n=new TreeNode(v);
  n.left=constructFromPrePost(pre.slice(0,i+1),post.slice(0,i+1));
  n.right=constructFromPrePost(pre.slice(i+1),post.slice(i+1));
  return n;
  };
var constructFromPrePost2 = function(pre, post) {// recurssive
  const map = {}; let i = 0;
  
  for(let i = 0; i < post.length; i++) {
      map[post[i]] = i;
  }
  
  function callDFS(start, end) {
      if(start > end || i >= pre.length) return null;
      const node = pre[i++], idx = map[pre[i]];
      const tree = new TreeNode(node);
      if(idx < start || idx > end) return tree;
      tree.left = callDFS(start, idx);
      tree.right = callDFS(idx+1, map[node]-1)
      return tree;
  }
  return callDFS(0, post.length-1);
};
//236. Lowest Common Ancestor of a Binary Tree
const lowestCommonAncestor = (root, p, q) => {
  if(!root)return false;
  if(root===p||root===q)return root;//! cant be just true,have to return root to output common ancester
  let x=lowestCommonAncestor(root.left,p,q);//!have to initialize x and y to prevent running it again
  let y=lowestCommonAncestor(root.right,p,q);
  if(x&&y)return root;
  return x||y;
  };
//652. Find Duplicate Subtrees
var findDuplicateSubtrees = function(root) {
  const ans = [];
  const M = {}
  dfs(root);
  return ans;

function dfs(n) {
  if (!n) return null;
    let sub = n.val.toString() + "." + dfs(n.left) + dfs(n.right);//!!(.) is important to differentitate 00 and 0.0
    if (!M[sub]) M[sub] = 1;
    else if (M[sub] === 1)  {  ans.push(n);  M[sub]++;}//!!to make sure repeated only added once
    return sub;//!! important!! to make sure every left and right is run
}
};
//297. Serialize and Deserialize Binary Tree
function serialize(root) {
  let ans = [];
  dfs(root);
  return ans;

  function dfs(node) {
    if (node == null)return ans.push(null);
    ans.push(node.val);
    dfs(node.left);
    dfs(node.right);
  }
 
}
function deserialize(ans) {
    if (ans.length === 0) return;
    const val = ans.shift();
    if (val == null) return null;
    let node = new TreeNode(val);
    node.left = deserialize(ans);
    node.right = deserialize(ans);
    return node;
}
//543. Diameter of Binary Tree(find longest path,not have to include root node)
var diameterOfBinaryTree = function(root) {//!!important return and answer is completely differrent!!
  if(!root)return null;
  let max=0;
  dfs(root);
  return max;

 function dfs(n){
if(!n)return 0;//!!count from the back
let L=dfs(n.left);
let R=dfs(n.right);
max=Math.max(L+R,max);//!max is L+R but return of node is Math.max(L,R)+1
return Math.max(L,R)+1;
}
};
//112. Path Sum//! need to reach to end of node
var hasPathSum = function(root, targetSum) {
if(!root)return false;
targetSum-=root.val;
if(targetSum==0&&!root.left&&!root.right)return true 
return hasPathSum(root.left,targetSum)||hasPathSum(root.right,targetSum)   
}  

//113. Path Sum II

let rot={"val":5,"left":{"val":4,"left":{"val":11,"left":{"val":7,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null},"right":{"val":8,"left":{"val":13,"left":null,"right":null},"right":{"val":4,"left":{"val":5,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}}

var pathSum = function(root, targetSum) {
  let ans=[];
if(!root)return ans;
dfs(root,targetSum,[])
return ans;
  
function dfs (n,sum,cur){
if(!n)return;
if(sum===n.val&&!n.left&&!n.right)ans.push([...cur,n.val]);
  dfs(n.left,sum-n.val,cur.concat(n.val))
  dfs(n.right,sum-n.val,cur.concat(n.val))
  }
};

//437. Path Sum III//!smimlar to leetcode 560!!
var pathSum = function(root, targetSum) {
  let count=0
  if(!root)return count
  let map= {0:1}//!! this is for sum from the start
  dfs(root,0)
  
  function dfs(n,sum){
if(!n)return;
  sum+=n.val;
  let x=sum-targetSum;
  if(map[x])count+=map[x]//!!for sum in the middle
      map[sum]=(map[sum]||0)+1
  dfs(n.left,sum)
  dfs(n.right,sum)
 map[sum]--
  
  }
  }
//110. Balanced Binary Tree//!!same as diameter of the tree, count from the back
var isBalanced = function(root) {
  let ans=true
  dfs(root);
  return ans;
  
  function dfs(n){
  if(!n)return 0;
  let L=dfs(n.left)
  let R=dfs(n.right);
  if(Math.abs(L-R)>1) ans=false;
  return Math.max(L,R)+1
    }
  };
//108. Convert Sorted Array to Binary Search Tree
var sortedArrayToBST = function(nums) {
  if(!nums) return null;
  return dfs(0,nums.length-1);

function dfs(L,R){//or use if (low > high)return null; instead M!==L
  let M=L+Math.floor((R-L)/2);
  let n=new TreeNode(nums[M]);
if(M!==L)n.left=dfs(L,M-1)
if(M!==R)n.right=dfs(M+1,R)
return n
} 
};
  //98. Validate Binary Search Tree
  var isValidBST = function(root,min=null,max=null) {
if(!root)return true;
if(min!==null&&root.val<= min)return false;
if(max!==null&&root.val >= max)return false;
return isValidBST(root.left,min,root.val)&& isValidBST(root.right,root.val,max)
}
//450. Delete Node in a BST
var deleteNode = function(root, key) {
  if (!root) return null;//have to return null at the end of node;
  if (root.val === key) {
    if (!root.left) return root.right;
    if (!root.right) return root.left;
    let cur = root.right;
    while (cur.left) cur = cur.left;
    cur.left = root.left;//move entire left side under cur
    return root.right;//return note to connect with previous recursion
  }
  if (key > root.val) root.right = deleteNode(root.right,key);//traverse to right
  else root.left = deleteNode(root.left,key);//traverse to left
  return root;//return root node at the end after everyting
}

//987. Vertical Order Traversal of a Binary Tree
var verticalTraversal = function(root) {
  const nodeInfos = []; // holds the x, y, & val information of each node traversed
  
  getNodeInfos(root, 0, 0);

// sort by the following order of importance:
//  1. x - coordinate
//  2. y - coordinate precedence given to higher value
//  3. node val in ascending order

  nodeInfos.sort((a, b) => a[0] - b[0] || b[1] - a[1] || a[2] - b[2]);
  
  const map = new Map();
  
  for (const [x, y, val] of nodeInfos) {
      if (!map.has(x)) map.set(x, []);
      map.get(x).push(val);
  }
  
  return [...map.values()];
  
  function getNodeInfos(node, x, y) {
      if (node) {
          getNodeInfos(node.left, x - 1, y - 1); // traverse left
    nodeInfos.push([x, y, node.val]);
          getNodeInfos(node.right, x + 1, y - 1); // traverse right
      }
  }
};
//230. Kth Smallest Element in a BST
var kthSmallest = function (root, k) {
  let ans = [];
  dfs(root);
  return ans.pop();

  function dfs(n) {
    if (ans.length === k || n == null) return;
 
      dfs(n.left);
      if (ans.length < k) ans.push(n.val);
      dfs(n.right);
    
  }
};
//1448 Count Good Nodes in Binary Tree
var goodNodes = function(root) {
  let count=0;
  if(!root)return 0;
dfs(root,root.val)
return count;
  function dfs(n,x){
    if(!n)return;
    if(n.val>=x){x=n.val;count++}
    dfs(n.left,x)
    dfs(n.right,x)
  }
};
//199. Binary Tree Right Side View
var rightSideView = function(root) {
  let ans=[]
  dfs(root,0);
  return ans;

function dfs(n,x){
if(!n)return;
ans[x]=n.val;
dfs(n.left,x+1)
dfs(n.right,x+1)
}
};
//trie
//208. Implement Trie (Prefix Tree) 
var Trie = function() {
  this.root={}
};
Trie.prototype.insert = function(word) {
    let n=this.root;
    for(let W of word){
      if(!n[W])n[W]={}
      n=n[W];
    }
    n.end=true;
};
Trie.prototype.search = function(word) {
    let n=this.root;
    for(let w of word){
      if(!n[w])return false;
      n=n[w];
    }
    return n.end?true:false//! use this bc n.end may not exist
};
Trie.prototype.startsWith = function(word) {
  let n=this.root;
  for(let w of word){
    if(!n[w])return false;
    n=n[w];
  }
    return true;
};
