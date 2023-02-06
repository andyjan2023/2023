//matrix order/hash/system design 

//189. Rotate Array//!important concept
//846. Hand of Straights
//724. Find Pivot Index,find ind that separaet into half, or -1/pivotIndex([2,1,-1])
//73. Set Matrix Zeroes, with o(1)space//~memoery problem
//54. Spiral Matrix//  console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))->[1,2,3,6,9,8,7,4,5]
//59. Spiral Matrix II//generateMatrix (3) ans in array
//48 rotate image
//498. Diagonal Traverse/console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]))-> [1,2,4,7,5,3,6,8,9]
//118. Pascal's Triangle/console.log(generate(5));
//539. Minimum Time Difference/findMinDifference( ["23:59","00:00"]
//6. Zigzag Conversion/Input: s = "PAYPALISHIRING", numRows = 4-> "PINALSIGYAHRPI"
// P     I    N}
// A   L S  I G}}
// Y A   H R
// P     I

//49. Group Anagrams/// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));->strs = ["eat","tea","tan","ate","nat","bat"]->[["bat"],["nat","tan"],["ate","eat","tea"]]
//937. Reorder Data in Log Files/console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let4 own kit dig","let3 art zero"]));
//41. First Missing Positive. must 0(1)memory//~memoery problem

//31. Next Permutation//console.log(nextPermutation([1,3,2]));find next lexicographically permutation[1,2,3] -> [1,3,2]//!queue is used for monotonic pattern
//84. Largest Rectangle in Histogram//!queue is used for monotonic pattern
//20. Valid Parentheses,t/f? "(}"
//739. Daily Temperatures//console.log(dailyTemperatures([73,74,75,71,69,72,76,73]))->[1,1,4,2,1,1,0,0]find n day after t is high or 0//!keep stack decreasing
//503. Next Greater Element II/console.log([1,2,3,4,3]->[2,3,4,-1,4]find next greater or -1;//!keep stack monolitic decreasing
//128. Longest Consecutive Sequence(in random order) in arr /Input: nums = [100,4,200,1,3,2]Output: 4
///240. Search a 2D Matrix II //!use monitoic pattern to search
//239. Sliding Window Maximum/find max number in window k at every index of array. ep.Input: nums = [1,3,-1,-3,5,3,6,7], k = 3,Output: [3,3,5,5,6,7]//!keep monlitic decreasing to keep window[0] the largest!

//146. LRU Cache  
//460. LFU Cache//?
//1472. Design Browser History>
//211. Design Add and Search Words Data Structure
//355. Design Twitter
//621. Task Scheduler
//380. Insert Delete GetRandom O(1)//~memmoery problem
//295. Find Median from Data Stream
//42. trapping rainwater//?


//****************************************************************************************************************** */


//189. Rotate Array
var rotate = function(nums, k) {
  k = k % nums.length;
  nums.unshift(...nums.splice(nums.length - k, k));//!important concept!!
  return nums;
};
//846. Hand of Straights
var isNStraightHand = function (hand, groupSize) {
  if (groupSize === 1 && hand.length ) return true;
  hand.sort((a, b) => a - b);
  let start = hand.shift();
  let count = 1;
  let ind = 0;
  while (ind < hand.length) {
    if (hand[ind] === start + 1) { start++; count++; hand.splice(ind, 1);} 
    else ind++;
    if (count === groupSize) {  if (!hand.length) break; start = hand.shift(); count = 1; ind = 0;}
  }
  return hand.length === 0 && count === groupSize ? true : false;
};

//724. Find Pivot Index
var pivotIndex = function(nums) {//console.log(pivotIndex([2,1,-1]));
  let half=nums.reduce((a,b)=>a+b)/2;
  for(let x=0;x<nums.length;x++){
    if(half-nums[x]/2===0)return x
    half-=nums[x];
    if(half<0)return -1
  }
  };
//73. Set Matrix Zeroes, with o(1)space
  var setZeroes = function (matrix) {
    let yZ = false;
    let xZ = false;
    for (let y = 0; y < matrix.length; y++) {//!use first row and col as lable of zero except first row/col, yZ and xZ is the lable of first row/col
      for (let x = 0; x < matrix[0].length; x++) {
        if (matrix[y][x] === 0) {
          if (y === 0 && x === 0) yZ = xZ = true;
          else if (y === 0) yZ = true;
          else if (x === 0) xZ = true;
          else matrix[0][x] = 0;
          matrix[y][0] = 0;
        }
      }
    }
    for (let y = 1; y < matrix.length; y++) {//! mark every position according to first row/col label.
      for (let x = 1; x < matrix[0].length; x++) {
        if (matrix[y][0] === 0) matrix[y][x] = 0;
        if (matrix[0][x] === 0) matrix[y][x] = 0;
      }
    }
    if (yZ) matrix[0].fill(0);//! mark first row and col using yZ and xZ
    if (xZ) matrix.map((x) => (x[0] = 0));
    return matrix;
  };
  //54. Spiral Matrix//  console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
var spiralOrder = function(matrix) {
  debugger;
  let T=0,B=matrix.length-1,L=0,R=matrix[0].length-1;
  let total=matrix.length*matrix[0].length;
  let ans=[];
  
  while(ans.length<total){
  for(let i=L;i<=R&&ans.length<total;i++){ans.push(matrix[T][i])}
  T++;
  for(let i=T;i<=B&&ans.length<total;i++){ans.push(matrix[i][R])}
  R--;
  for(let i=R;i>=L&&ans.length<total;i--){ans.push(matrix[B][i])}
  B--;
  for(let i=B;i>=T&&ans.length<total;i--){ans.push(matrix[i][L])}
  L++;
  
  }
  return ans;
  };
//59. Spiral Matrix II//generateMatrix (3)
var generateMatrix = function(n) {
  let total=n**2;
  let ans=new Array(n).fill([]).map(()=>[...new Array(n)])
  let x=1;
  let L=0;
  let R=n-1;
  let T=0;
  let B=n-1;

  while(x<=total){
    for(let i=L;i<=R;i++){ans[T][i]=x;x++}
    T++;// make sure T++ not inlucde in bracket!!!
    for(let i=T;i<=B;i++){ans[i][R]=x;x++}R--;
    for(let i=R;i>=L;i--){ans[B][i]=x;x++}B--;
    for(let i=B;i>=T;i--){ans[i][L]=x;x++}L++;

  }
    return ans
};
//48. Rotate Image
var rotate = function(matrix) {
  for(let y=0;y<matrix.length;y++){
    for(let x=0;x<y;x++){
      [matrix[y][x],matrix[x][y]]= [matrix[x][y],matrix[y][x]]//! flips diagonally then flip vertically
    }
  }
  for(let y=0;y<matrix.length;y++){
    let L=0,R=matrix[0].length-1;
    while(R>L){
     [ matrix[y][R],matrix[y][L]]= [ matrix[y][L],matrix[y][R]]
     L++;R--;
    }
  }
  return matrix
};
console.log(rotate([[1,2,3],[4,5,6],[7,8,9]]));
//498. Diagonal Traverse/console.log(findDiagonalOrder([[1,2,3],[4,5,6],[7,8,9]]));
var findDiagonalOrder = function(mat) {
  let rl=mat.length;
  let cl=mat[0].length;
  let ans=Array(rl+cl-1).fill().map(()=>[])
  
    for(let r=0; r<rl;r++){//! notice all diagonal has the same c+r
  for(let c=0;c<cl;c++){
  if((r+c)%2===0) ans[r+c].unshift(mat[r][c]);//! toggle push/unshift on each diagonal
  else ans[r+c].push(mat[r][c]);
  }
    }
  return ans.flat(1)  
  };
//118. Pascal's Triangle/console.log(generate(5));
var generate = function(numRows) {

let ans=[];
let row=[];
for(let r=0;r<numRows;r++)
{for(let c=0;c<=r;c++){
if(c===0||c===r)row.push(1)
else row.push(ans[r-1][c-1]+ans[r-1][c])
}
ans.push([...row]);row=[]

}
return ans
}
//539. Minimum Time Difference
var findMinDifference = function(timePoints) {//!bucket sort
  let m=[];
  let m2=[];
  let min=Infinity;
  for(let i of timePoints){
    let x=+(i.slice(0,2))*60+ +(i.slice(3))//!bucket sort, convert time to m[index]
  if(m[x])return 0;//!if repeated, time difference is zero
    m[x]=true;
  }

  m.map((x,i)=>{
    if(m[i]){
      if(m2.length)min=Math.min(min,i-m2[0])
      m2.unshift(i)//!map to m2 for start and end comparison
    }
  })
  return Math.min(min, 60*24-m2[0]+m2.at(-1))// compare end to start also!!
};
//6. Zigzag Conversion/console.log(convert("PAYPALISHIRING",3));
var convert = function (s, numRows) {
  let ans = new Array(numRows).fill([]).map(() => []);
  let s1 = s.split(""); //! so it can be shifted. or use slice() as str
  while (s1.length) {
    for (let x = 0; x < numRows; x++) ans[x].push(s1.shift());
    for (let x = numRows - 2; x > 0; x--) ans[x].push(s1.shift());//!//! fill in the diagonal part on each row
  }
  return ans.flat().join("");
};
var convert = function(s, numRows) {//
  debugger;
  if(numRows===1)return s
  let ans=new Array(numRows).fill('')
  let ind=0;
  let step=1;
for (x of s){

ans[ind]+=x;
if(ind===numRows-1)step=-1//use if to toogle up and down
if(ind===0)step=1;
ind+=step

}
return ans.join('')
}

//49. Group Anagrams/// console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
var groupAnagrams = function(strs) {//!convert into unique keys
  let m=Array(26).fill(0)
  let M={}
  let ans=[]
  for (let str of strs) {
    let m1 = [...m];//! be careful there!
    for (let x of str)m1[x.charCodeAt(0) % 26] += 1;
    let m2 = m1.join(",");//!! careful, join('')cant be used because [10,10]would be the same as [101,0]
    if (M[m2]) M[m2].push(str);
    else M[m2] = [str];
  }
  for(let x in M)ans.push(M[x])
  return ans
  };
//937. Reorder Data in Log Files/console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let4 own kit dig","let3 art zero"]));
var reorderLogFiles = function(logs) {
  let D=[]
  let L=[]
logs.map(x=>{if(isFinite(x.split(' ')[1])){D.push(x)}else L.push(x)})
L.sort((a,b) => {
  let l1 = a.split(' ').slice(1).join(' ')
  let l2 = b.split(' ').slice(1).join(' ')
  if (l1 === l2) return a < b ? -1:1
  return l1 < l2 ? -1:1
})
return [...L,...D]
};
//41. First Missing Positive
var firstMissingPositive = function (nums) {
  let positiveCount = 0;
  for (let i = 0; i < nums.length; i++) {//! swap all positive value to the left
    if (nums[i] > 0) {
      [nums[i], nums[positiveCount]] = [nums[positiveCount], nums[i]];
      positiveCount++;
    }}
  for (let i = 0; i < positiveCount; i++) {//!mark all value-1 to negative, value-1 because index 0 can be used at 1
    let num = Math.abs(nums[i]);
    if (num <= nums.length && nums[num - 1] > 0)   nums[num - 1] *= -1;
  }
  for (let i = 0; i < positiveCount; i++) {//!under all positivecount range, fist unmarked is the missing number
    if (nums[i] > -1)  return i + 1;
    }
  return positiveCount + 1;//! in worst case, positive count +1 is the missing number
}


//31. Next Permutation//console.log(nextPermutation([1,3,2]));//! need to be linear time!
var nextPermutation = function(nums) {
  let i=nums.length-2;//! set i second to last instead of the last, so we can use i
  while(nums[i]>=nums[i+1])i--;//!loop until i is a decreasing index
  if(i>=0){
  let j=nums.length-1;
  while(nums[i]>=nums[j])j--;//!loop until j is the next bigger num, i below is decreasing number!
  [nums[i],nums[j]]=[nums[j],nums[i]];}
   let left=i+1,right=nums.length-1;//!remaining is the decreasing number, reverse the remain by doing two point swap[-> <-]
    while(left<right){
      [nums[left],nums[right]]=[nums[right],nums[left]]
      left++;
      right--;
    }
  }
 // 84. Largest Rectangle in Histogram
let largestRectangleArea = function(heights) {
let stack = [0];//!push only heighter bar/ makes monolitic order
let maxArea = 0;
let len=heights.length
for(let i=1;i<heights.length;i++) {
    while( heights[i] < heights[stack[stack.length - 1]]){    
        let top = stack.pop();
        maxArea = Math.max(maxArea, heights[top] * (stack.length === 0 ? i : (i-1 )-stack[stack.length - 1]));
    }
    stack.push(i);
}//!if !stack.length, meaning top is the smallest bar , so area R=i-i,L=0,length= i-1-0+1=i, if stack previous top exist, area R=(i-1),L=previous top,length=i-1-previous top
while (stack.length !== 0) {//!pop the left over item in stack
    let top = stack.pop();
    maxArea = Math.max(maxArea, heights[top] * (stack.length === 0 ? len :(len-1 )-stack[stack.length - 1]));
}
return maxArea;
}
//20. Valid Parentheses
var isValid = function(s) {
  let M={"(":")",'{':'}','[':']'};
  let Q=[];
  for(let i of s){
if(!M[i]){
if(!Q.length||i!==M[Q.pop()])return false;//!Q.length not nessary bc empty array can be pop()
}
else Q.push(i)
  }
return !Q.length?true:false
  }
//739. Daily Temperatures//console.log(dailyTemperatures([73,74,75,71,69,72,76,73]));
var dailyTemperatures = function(temperatures) {
  let stack=[0];  
let last=temperatures[0];
  let ans=new Array(temperatures.length).fill(0);
  for(let x=1;x<temperatures.length;x++){
let cur=temperatures[x]
    while(last<cur){
      let y=  stack.pop();
      ans[y]=x-y;
      last=temperatures[stack[stack.length-1]];
    }
  stack.push(x)
  last=cur;
  }
  return ans
}
//503. Next Greater Element II/console.log(nextGreaterElements([1,2,3,4,3]));
var nextGreaterElements = function (nums) {
  let stack = [0];
  let ans = Array(nums.length).fill(-1);
  for (let x = 1; x < nums.length; x++) {//!!! start from 1 since 0 already in stack
    while (nums[stack[0]] < nums[x])ans[stack.shift()] = nums[x];
    stack.unshift(x);
  }
  let x2 = stack.pop();//!ind x2 is the biggest number. 
  for (let x = 0; x <= x2 && stack.length; x++) {//! loop 2nd time, but only til the biggest number and without adding more to stack
    while (nums[stack[0]] < nums[x]) ans[stack.shift()] = nums[x];
  }
  return ans;
};
//128. Longest Consecutive Sequence
var longestConsecutive = function(nums) {
  if(nums.length<2)return nums.length;
let M={};
nums.map(x=>M[x]=1)
let max=1;
for(let x=0;x<nums.length;x++) { 
  if(M[nums[x]+1])continue;//! make sure only put the biggest number into while loop
  let count=1;
 let y=nums[x]
 while( M[y-1]){y--;count++;max=Math.max(max,count)
 }}
return max
};
//240. Search a 2D Matrix II
var searchMatrix = function (matrix, target) {
  let x = 0;
  for (let y = matrix.length - 1; y >= 0; y--) {
    if (x >= matrix[0].length) return false;
    while (matrix[y][x] < target) x++;
    if (matrix[y][x] === target) return true;
  }
  return false
};
//239. Sliding Window Maximum
var maxSlidingWindow = function (nums, k) {
  const result = [];
  const window = [];
  if (nums.length < k) return null;
  for (let i = 0; i < nums.length; i++) {
    while (window.length > 0 && nums[i] >= nums[window[window.length - 1]]) window.pop(); //! remove all numbers from tail of window smaller than current
    window.push(i);                                                                       //!push the curr inthe window, as it is the largest
    if (i >= k - 1) {//! start adding to result from this point on
      if (window.length > 0 && window[0] <= i - k) window.shift(); //!remove first number if it's no longer in window
      result.push(nums[window[0]]);
    }
  }
  return result;
  };

class xx{
constructor(i){
  this.d=i;
}
gg(x){ return this.d+x}
}

let xx= function(i){
  this.d=i;}
xx.prototype.gg=function(x){
  return this.d+x;
}






//146. LRU Cache  
class LRUCache{
  constructor(capacity){
  this.capacity=capacity;
  this.map=new Map();
  }
  get(key){
    if(this.map.has(key)){
      let v=this.map.get(key);
      this.map.delete(key);
      this.map.set(key,v);
      return v;
    }else{
      return -1;
    }}
    put(key,val){
      if(this.get(key)===-1&&this.capacity===this.map.size){
          for(let x of this.map){this.map.delete(x[0]);break} }
          this.map.set(key,val);
    }
 }




//380. Insert Delete GetRandom O(1)
var RandomizedSet = function() {
  this.M = {};
  this.arr = [];
};

RandomizedSet.prototype.insert = function(val) {
  if (this.M[val] != null) return false;
  this.M[val] = this.arr.length;
  this.arr.push(val);
  return true;    
};
RandomizedSet.prototype.remove = function(val) {
  if (this.M[val] == null) return false;
  let ind = this.M[val];//find ind of val
  delete this.M[val];//delete val from map
  let last = this.arr.pop();// get the tail of array
  if (this.arr.length === ind) return true;
  this.M[last] = ind;//update tail index to ind in map
  this.arr[ind] = last;//update ind location to tail value
  return true;
};

RandomizedSet.prototype.getRandom = function() {
  if (!this.arr.length) return null;
  return this.arr[Math.floor(Math.random() * this.arr.length)];
};
//1472. Design Browser History>
class Nd{
  constructor(x,n,p){this.val=x;this.next=n;this.prev=p}
}
var BrowserHistory = function(homepage) {
 this.homepage=homepage;
 this.cur=new Nd(homepage,null,null);
};
BrowserHistory.prototype.visit = function(url) {   
this.cur.next=new Nd(url,null,this.cur);
this.cur=this.cur.next;
};
BrowserHistory.prototype.back = function(steps) {
let count=0;
while(this.cur.prev&&count<steps)
{this.cur=this.cur.prev;
count++;
}
return this.cur.val;
};
BrowserHistory.prototype.forward = function(steps) {
let count=0;
while(this.cur.next&&count<steps)
{ this.cur=this.cur.next;
count++;
}
return this.cur.val;
};

 //211. Design Add and Search Words Data Structure
 var WordDictionary = function () {
  this.trie = {};
};
WordDictionary.prototype.addWord = function (word) {
  let n = this.trie;
  for (let w of word) {
    if (n[w] == null) n[w] = {};
    n = n[w];
  }
  n.end = true;
};

WordDictionary.prototype.search = function (word) {
  return dfs(this.trie, 0);
  function dfs(n, ind) {
    if (word.length == ind) return n.end ? true : false;
    let s = word[ind];
    if (s === ".") { for (let s in n) if (dfs(n[s], ind + 1)) return true; } 
    else if (n[s] != null) return dfs(n[s], ind + 1);
    return false;
  }
};
//355. Design Twitter
var Twitter = function( ) {
  this.users = {}//!follower:[..followees]
  this.tweets = {}//!user:[...twetID]
  this.tweetid_to_user={}//!tweetID:user
  this.masterTweet = []//!tweetID records
}
Twitter.prototype.postTweet= function(userId, tweetId) {
  this.masterTweet.push(tweetId)
  this.tweetid_to_user[tweetId] = userId;
  if ( !this.users[userId]){
      this.users[userId] = [ ]
      this.tweets[userId] = [ ] }
  this.tweets[userId].push(tweetId)
}
Twitter.prototype.follow= function(followerId, followeeId) {
  if ( !this.users[followerId]){
      this.users[followerId] = [ ]
      this.tweets[followerId] = [ ] }
  if(!(this.users[followerId].includes(followeeId))) this.users[followerId].push(followeeId)
}
Twitter.prototype.unfollow= function(followerId, followeeId) {
  if ( !this.users[followerId] ){
      this.users[followerId] = [  ]
      this.tweets[followerId] = [ ]}
  let list = this.users[followerId]
  let value = list.indexOf(followeeId)
  if(value!=-1) list.splice(value,1)
}
Twitter.prototype.getNewsFeed= function(userId) {
  // get all the tweets from user and people user follow
  // this.masterTweet.push(tweetId)
  // this.tweetid_to_user[tweetId]
  if ( !this.users[userId]){
      this.users[userId] = [userId]
      this.tweets[userId] = [ ]  }
  let usersForNewsFeed = [userId].concat(this.users[userId])
  let list = [ ]
  for (let i =this.masterTweet.length-1; i>=0 ; i--){
      if (list.length===10)  break;
      if(usersForNewsFeed.includes(this.tweetid_to_user[this.masterTweet[i]]))    list.push(this.masterTweet[i])
  }
  return list
}


//621. Task Scheduler.eg[a,a,a,a,b,b,b,b,c],n=2, =>11, abcab_ab_ab
var leastInterval = function (tasks, n) {
  let m = {};
  let max = 0;
  let count = 0;
  for (let t of tasks) {
    if (!m[t]) m[t] = 1;
    else m[t]++;
    if (m[t] > max) {
      max = m[t]; count = 1;} 
    else if (m[t] === max) count++;
  }
  return Math.max((max - 1) * (n + 1) + count, tasks.length);//each cycle is length of n+1
};//!count is always (max-1)*(n+1)+max count(all other task fit during cool period ), or tasks length if cant fit

//295. Find Median from Data Stream
MedianFinder.prototype.addNum = function(num) {
  let L=0;
  let R=this.array.length-1;
  while(L<=R){
   let m=~~((R-L)/2)+L
   if(this.array[m]<=num)L=m+1
   else R=m-1
  }
  this.array.splice(L,0,num)//! find the left most index to insert
};

MedianFinder.prototype.findMedian = function() {
   if(!this.array.length)return null
 let Len=~~(this.array.length/2)
 console.log(Len)

  if (this.array.length%2==0)return (this.array[Len]+this.array[Len-1])/2
  else return this.array[Len]
};
