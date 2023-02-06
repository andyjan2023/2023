//sorting, intervals
//merge sort(divide into 1s and merge recussively/javascript sort,divide and conquer
//quick sort(or quickselet)/bst(use pivot to sort 2 half)
//bubble(tradiontal n^2)
//bucket sort

//Intervals
//56. Merge Intervals,cant overlap//merge([[1,3],[2,6],[8,10],[15,18]])answer new interval
//57. Insert Interval//insert([[1,2],[3,5],[6,7],[8,10],[12,16]],[4,8])answer new interal
//435. Non-overlapping Intervals, answer count of arrays to make it nonoverlap, [1,2][2,3]is fine/( [[1,2],[1,2],[1,2]])
//986. Interval List Intersections(intvl1,intrvl2),answer new interval
//731. My Calendar II/732 caldner III, google onsite https://leetcode.com/discuss/interview-question/613816/Google-or-Onsite-or-Meeting-Rooms-3

//bucket/merge/quick/heap sort
//347. Top K Frequent Elements//(array,k)ans k most freq nums in array
//451. Sort Characters By Frequency('tree)anser('eert')
//973. K Closest Points to Origin([[3,3],[5,-1],[-2,4]], k = 2)ans in array
//23. Merge k Sorted Lists

//heap
//!parent=floor(len-2)/2; or len
//! left child =2*i+1, right =2*i+2
//max heap, swap with largest child/ min heap, swap with smallest child
//siftdown is log.n so heapify is n*log.n, but its more close to o(n)bc each sift has different complexity

//quick sort
//75. Sort Colors. given[2,0,2,1,1,0]sort 0,1,2 in place

//215. Kth Largest Element in an Array
//692. Top K Frequent Words
//****************************************************************************************************************** */
//56. Merge Intervals
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]); //!! dont forget to sort w/ a[0]
  let ans = [];
  for (let x of intervals) {
    if (!ans.length) ans.push(x);
    else {
      let pre1 = ans.at(-1);
      let [cur0,cur1 ]=x;
      if (cur0 <= pre1[1])pre1[1] = Math.max(cur1, pre1[1]);//!use pass by reference to change. cant work if pre=ans.at(-1)[-1],entire arr should be included
      else ans.push(x);
    }
  }
  return ans;
};
//57. Insert Interval
var insert = function(intervals, newInterval) {
  intervals.sort((a, b) => a[0] - b[0]);
  if (!intervals.length) return [newInterval];
  let ans = [];
  let done = false;
  let [new0, new1] = newInterval;
  for (let  [cur0,cur1] of intervals) {
    if (new0 > cur1) ans.push([cur0,cur1]);
    else if (cur0 > new1) {
      if (!done) {  ans.push([new0, new1]);done = true; }
      ans.push( [cur0,cur1]);
    } else {
      new0 = Math.min(cur0, new0);
      new1 = Math.max(cur1, new1);
    }
  }
  if (!done) ans.push([new0, new1]);
  return ans;
}

var insert = function(intervals, newInterval) {
  let size = intervals.length;
  let index = 0;
  let res = [];
  
  while(index < size && intervals[index][1] < newInterval[0]) {//! add untouched part first
      res.push(intervals[index]);
      index++;
  }
  while(index < size && intervals[index][0] <= newInterval[1]) {//!add intersected part
      newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
      newInterval[1] = Math.max(newInterval[1], intervals[index][1]);
      index++;
  }
  res.push(newInterval);//!add new arr
  while(index < size) {//! add the rest untouched part
      res.push(intervals[index]);
      index++;
  }
  return res;
}
//435. Non-overlapping Intervals
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let ans = [];
  let count = 0;
  for (let x of intervals) {
    let pre = ans.at(-1)
    if (!ans[0]) ans.push(x);
    else if (x[0] < pre[1]) {
      if (x[1] < pre[1]) ans[ans.length - 1] = x; //if prev tail longer, set it as cur tail
      count++;} 
    else ans.push(x);
  }
  return count;
};
//986. Interval List Intersections
 var intervalIntersection = function(firstList, secondList) {
   let arr= [...firstList,...secondList].sort((a,b)=>a[0]-b[0]);
   let ans=[]
  for(let x=1;x<arr.length;x++){
 if(arr[x-1][1]>=arr[x][0])
ans.push([Math.max(arr[x-1][0],arr[x][0]),Math.min(arr[x-1][1],arr[x][1])])
if(arr[x-1][1]>arr[x][1])arr[x][1]=arr[x-1][1]//!!careful!! set pre tail as max tail if longer!!
  }
return ans
};//console.log(intervalIntersection(firstList =[[8,15]], secondList =[[2,6],[8,10],[12,20]]));

//347. Top K Frequent Elements//bucket sort
var topKFrequent = function(nums, k) {
    let M={}
    for(let x of nums)M[x]= ~~M[x]+1
let buc=new Array(6).fill().map(()=>[])

Object.entries(M).forEach(([a,b])=>{buc[b].push(parseInt(a))});
let ans=[]
for(let i=buc.length-1;i>=0;i--){if(buc[i])ans.push(...buc[i])}
return ans.slice(0,k)
};
//451. Sort Characters By Frequency
var frequencySort = function (s) {
  let M = {};
  let freq = new Array(s.length + 1).fill().map(() => []);
  for (let x of s) M[x] = ~~M[x] + 1;
  for (let x in M) freq[M[x]].push(x);
  let ans = "";
  for (let i = freq.length; i > 0; i--)  if (freq[i]) freq[i].forEach((x) => (ans += x.repeat(i)));
  return ans;
};
//973. K Closest Points to Origin//!wrong , use minheap
var kClosest = function(points, k) {
  points.sort((b,a)=>(a[0]**2+a[1]**2)-(b[0]**2+b[1]**2) )
  return points.slice(0,k)
};
//23. Merge k Sorted Lists
var mergeKLists = function (lists) {
  if (!lists || lists.length === 0) return null;
  return dfs(lists);

  function dfs(arr) {
    if (arr.length < 2) return arr[0];
    let mid = ~~(arr.length / 2);
    let L = dfs(arr.slice(0, mid));
    let R = dfs(arr.slice(mid));
    let combo = new ListNode();
    let head = combo;
    console.log(L, R);
    while (L && R) {
      if (L.val < R.val) { head.next = L; head = head.next;L = L.next;} 
      else {head.next = R;head = head.next;R = R.next;}
    }
    if (L) head.next = L;
    if (R) head.next = R;
    return combo.next;
  }
};
//75. Sort Colors
var sortColors = function(nums) {
  let L=0;
  let R=nums.length-1;
  for(let i=0;i<=R;i++){//!!not i<nums.length! it needs to stop at R or else it swaps back with 1
if(nums[i]===0){
  [nums[i],nums[L]]=[nums[L],nums[i]];
  L++;
}
else if(nums[i]===2){
  [nums[i],nums[R]]=[nums[R],nums[i]];
  R--;
  i--;
}}
return nums;
};

//215. Kth Largest Element in an Arra
var findKthLargest = function(nums, k) {// heapify input array in place
  const heap = new Heap(nums);// remove max from heap k-1 times
  for (let i = 1; i < k; i++) {
    heap.remove();
  }// remove one more (kth) element and return it
  return heap.remove();
};
//!last parent=floor(len-2)/2; 
//! left child =2*i+1, right =2*i+2

class Heap2 {//! Better Heap! use recurssive
  constructor(array) {
    this.heap = array;
    this.heapify(); }
  heapify() {
    const firstParent = Math.floor((this.heap.length - 2) / 2);
    for (let i = firstParent; i >= 0; i--) this.siftDown(i); }//~not siftDonw(first)!!!WTFFF
  remove() {//! bc remove the biggest->create swap first and last, pop,sift down from 0, 
  [  this.heap[0],this.heap[this.heap.length - 1]]= [ this.heap[this.heap.length - 1], this.heap[0]]
   let max=this.heap.pop();
    this.siftDown(0);
    return max;
  }
  siftDown(i) {//!make sure to travel down everytime
    let Biggest=i;
      let Lchild=2*i+1;
      let Rchild=2*i+2;
      if(Lchild<this.heap.length&&this.heap[Lchild]>this.heap[Biggest]) Biggest=Lchild;//~not >this.heap[i]!!!!!WTFFFF
      if(Rchild<this.heap.length&&this.heap[Rchild]>this.heap[Biggest]) Biggest=Rchild;
      if(Biggest!=i)//!either child will replace Biggest if there are bigger!!
      {[this.heap[Biggest],this.heap[i]]=[this.heap[i],this.heap[Biggest]];
      this.siftDown(Biggest);}
    }
}
var findKthLargest3 = function(nums, k) {//! merge sort!!
  return dfs(nums)[k-1];
  
  function dfs(arr){
   let len= arr.length;
  if(len<2)return arr;//!base case, add from the bottom
  let mid=Math.floor(len/2)
  let L=dfs(arr.slice(0,mid))
  let R=dfs(arr.slice(mid))
  let seg=[]
  while(L.length&&R.length){//!both must exist to compare
    if(L[0]>R[0])seg.push(L.shift())
    else seg.push(R.shift())
  }
  return [...seg,...L,...R]//! in case left or right have numbers left
  }
  };
var findKthLargest3 = function(nums, k) {//! quicksort, specialied to this problem!
    return quickSelect(0, nums.length - 1);

function quickSelect(start, end) {
  let pivotIndex = partition(start, end);//!pivot Index is always arr.length-kBiggest in increasing array!, or pivot index+1=kBiggest
  if (k < nums.length - pivotIndex)   return quickSelect(pivotIndex + 1, end);
  else if (k > nums.length - pivotIndex)  return quickSelect(start, pivotIndex - 1);
  return nums[pivotIndex];
};
function partition(start, end) {
  const pivot = nums[end];
  let i = start;
  let j = end - 1;
  while(i <= j) {   //!i needs to i<=j to move past the smaller index, not just i<j 
      while (nums[i] < pivot)   i += 1;//!set pointer to smaller ones
      while (nums[j] > pivot)    j -= 1;
      if(i <= j) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
          i += 1;
          j -= 1;
      } }
[nums[i], nums[end]] = [nums[end], nums[i]];//! dont forget to swap pivot to the middle
  return i;
}};




//692. Top K Frequent Words
// we could use a max priority queue

// iterate the array, build a hash map of all seen element and count
// build a max PQ with all elements in order of count & alphabet
// pop k times and save each to result
// return the result

var topKFrequent = function(words, k) {
	if(words.length === 0 || k === 0) {
		return [];
	}
	// build a hash map to count words
	const hashMap = {};

	// count words
	words.forEach((w) => hashMap[w]  // O(n)
		? hashMap[w] = hashMap[w] + 1
		: hashMap[w] = 1
	);
	
	// create a max priority queue, with custom compare function
	const maxPQ = new MaxPriorityQueue({ 
	
		// custom compare function, swap if return 1, don't swap if return -1
		compare: (w1, w2) => {
			// compare count first
			if (w1.count > w2.count) {
				return -1;
			}
			if (w1.count < w2.count) {
				return 1;
			}
			
			// if count is the same, compare string(length and alphabetic order )
			return w1.word > w2.word
				? 1
				: -1;
		}
	});

	// iterate word count hash map and put all element into max priority queue
	Object.keys(hashMap).forEach((w) => maxPQ.enqueue({ // O(n log n)
		word: w, 
		count: hashMap[w]
	}));
	
	// var to store result
	const result = [];
	
	// pop k times from max priority queue for top k words
	while(result.length < k) { // O(k log n)
		const top = maxPQ.dequeue();
		result.push(top.word);
	}
	
	return result;
};
//Time O(n + n log n + k log n) ~ O(n log n)

