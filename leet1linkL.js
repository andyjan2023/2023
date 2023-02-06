//two pointer, silding window, binary search, fast/slow pointer
// function ListNode(val, next) {
//   this.val = (val===undefined ? 0 : val)
//   this.next = (next===undefined ? null : next)}


//21. Merge Two Sorted Lists(11,l2)->new list
//2. Add Two Numbers * no reverse, eg. [9 9 ]+ [1]-->[0 0 1 ]
//328. Odd Even Linked List(12345)->13524
//160. Intersection of Two Linked Lists(l1,12)find intersect node
//141. Linked List Cycle,has circle t/f?
//142. Linked List Cycle II,find start of cirlce//!floyd algo
//86. Partition List/value less than x are moved to front, head = [1,4,3,2,5,2], x = 3--> [1,2,2,4,3,5])
//206. Reverse Linked List
//203. Remove Linked List Elements
//234. Palindrome Linked List,t/f?
//148. Sort List(l1)->l2 sorted
//430. Flatten a Multilevel Doubly Linked List//?hard
//19. Remove Nth Node From End of List
//24. Swap Nodes in Pairs(1,2,3,4,5)->2,1,4,3,5//?hard
//143.reorder list
//138. random pointer//?
//287, find repeated number. //!Floyds algo,
//****************************************************************************************************************** */
//21. Merge Two Sorted Lists
var mergeTwoLists = function(l1, l2) {
  let n=new ListNode;
  let head=n
  while(l1||l2){
    if(!l2){n.next=l1;l1=l1.next}
    else if(!l1){n.next=l2;l2=l2.next}
  else if(l1.val<=l2.val){n.next=l1;l1=l1.next}//!!dont mess up on <= then only add one side
  else{n.next=l2;l2=l2.next}
      n=n.next
  }
  return head.next
  
  };
//2. Add Two Numbers * no reverse, eg. [9 9 ]+ [1]-->[0 0 1 ]
var addTwoNumbers = function(l1, l2) {
  let n=new ListNode()
  let h=n;
  let count=0;
  while(l1||l2){
  if(!l2){n.next=l1;l1=l1.next}
  else if(!l1){n.next=l2;l2=l2.next}
  else {n.next=l1; n.next.val+=l2.val;l1=l1.next;l2=l2.next }
  if(count){n.next.val++;count--;}
  if(n.next.val>=10) {n.next.val-=10;count++;}//!dont miss using bracket on 1+ statement!!
  n=n.next;
  }
  if(count)n.next=new ListNode(count)
  return h.next
  }//console.log(addTwoNumbers(l6,l7));
//328. Odd Even Linked List
var oddEvenList = function(head) {
  if(!head)return head;
let headH=head;
let even=head.next;
let evenH=even;
while(even&&even.next){//!even.next here to make sure head isnt null
head.next=even.next;
head=head.next;
even.next=head.next;
even=even.next;
}
head.next=evenH
return headH;
};
//160. Intersection of Two Linked Lists
var getIntersectionNode = function (headA, headB) {
  let A = headA;
  let B = headB;
  while (A !== B) { //!!keep looping from the other side until they meeet,or they both==null if no meeting point
    if (!A) A = headB
    else A = A.next;
    if (!B) B = headA;
    else B = B.next;
  }
  return A;
};
//141. Linked List Cycle
  var hasCycle = function(head) {
    if(!head||!head.next)return false
         let L=head;let R=head;
    while(R.next&&R.next.next){
      L=L.next;
      R=R.next.next;
     if  ( L===R)return true
    }
    return false;
        };
//142. Linked List Cycle II
var detectCycle = function(head) {
  if (head===null||head.next===null) return null;
  let mid=head;
  let ful=head;
    let p=head;
  while(ful&&ful.next){
    mid=mid.next;
    ful=ful.next.next;
      if(mid===ful){ break;}
  }
  if(mid!==ful){return null}
  while(p!==mid){
    p=p.next;
mid=mid.next
  }
return p;
};
//86. Partition List
var partition2 = function(head, x) {
  debugger;
  let L=new ListNode()
  let R=new ListNode();
  let RH=R;
  let LH=L;
while(head){
if(head.val>=x){R.next=head;R=R.next;}
else{L.next=head;L=L.next;}
head=head.next
}
R.next=null;//!! make sure to cut the end!!!
L.next=RH.next;
return LH.next;
}
//206. Reverse Linked List
 var reverseList = function(head) {
  let pre=null;
  while(head){
  let temp=head.next;
  head.next=pre;
  pre=head;
  head=temp;
  }
  return pre;
  };
//203. Remove Linked List Elements
var removeElements = function (head, val) {
  let x = new ListNode();
  let xh = x;
  while (head) {
    if (head.val !== val) {  x.next = head;   x = x.next; }
    head = head.next;
  }
  x.next = null;//!! clean up the tail
  return xh.next;
};
//234. Palindrome Linked List
var isPalindrome = function(head) {
  let rev1=head;
  let rev2=head;
while(rev2&&rev2.next){//set 2nd half of Linked list
  rev1=rev1.next;
rev2=rev2.next.next;
}
let pre=null;
while(rev1){//reverse it
let temp=rev1.next;
rev1.next=pre;
pre=rev1;
rev1=temp;
}
while(pre){//compare it
if(pre.val!==head.val)return false
pre=pre.next;
head=head.next
}
return true;
};
//148. Sort List
var sortList = function(head) {
  let arr=[]
  let ans=new ListNode()
  let ansH=ans

while(head){
arr.push(head)
head=head.next
}
arr.sort((a,b)=>a.val-b.val)
arr.map((x)=>{ans.next=x;ans=ans.next;
})
ans.next=null;
return ansH.next;
};
//430. Flatten a Multilevel Doubly Linked List
  var flatten = function (head) {
    let pre = head;
    while (pre) {
      if (pre.child) {
        let temp = pre.next;///create temp
        pre.next = flatten(pre.child);//next is f(head.chilld)
        pre.next.prev = pre;
        pre.child = null;
        while (pre.next) pre = pre.next;//loop inside the child and connect to temp
        pre.next = temp;
        if (temp) temp.prev = pre;
      }
      pre = pre.next;//loop current level
    }
    return head;
  };

 //19. Remove Nth Node From End of List
 var removeNthFromEnd = function(head, n) {
  let headH=new ListNode();
  let count=0;
  headH.next=head;//!!need to recreate a new list so the first node can be deleted!
  let p2=headH;
  while(count!==n){p2=p2.next;count++}
  let p1=headH;
  while(p2.next){p1=p1.next;p2=p2.next}
 p1.next=p1.next.next;
 return headH.next
 }

//!24. Swap Nodes in Pairs!!!!!! very very important question!!!!!!
var swapPairs = function(head) {
  if(!head)return head;
let temp=new ListNode;
let tempH=temp;
temp.next=head;//!!this is in case head only has one node and loop not run

while(head&&head.next){//!head.next loop is not nessary bc temp is already pointed to next round
let even=head.next;//!!! create temp even
head.next=even.next;//!!make head.next to next round
temp.next=even;
even.next=head;
temp=head;//!! keep temp as last node before next round!!! head
head=head.next;

}
return tempH.next
};
//143. Reorder List ! need to review
var reorderList = function (head) {
  let L = head;
  let LH = L;
  let R = head;
  while (R && R.next) {
    L = L.next;
    R = R.next.next;
  }
  let pre = null;
  let cur = L.next; //! find middle node, reverse middle to end
  L.next = null;
  while (cur) {
    let nex = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nex;
  }
  let ans = new ListNode();
  let ansH = ans;

  while (pre) { //! merge 1st half and reversed 2nd half together
    ans.next = LH;
    LH = LH.next;
    ans = ans.next;
    ans.next = pre;
    pre = pre.next;
    ans = ans.next;
  }
  if (LH)    ans.next = LH;//! connect to any leftover
  return ansH.next;
};

//287. Find the Duplicate Number
var findDuplicate = function(nums) {
  //applying floy's algorithm
   let slow = 0,fast = 0, check = 0;
   while(true){
       slow = nums[slow];
       fast = nums[nums[fast]];
       if(slow == fast)  break; }
   while(true){
       slow = nums[slow];
       check = nums[check];
       if(slow == check) break; }
   return check; 
}
