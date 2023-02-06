


//sliding//!one slider, for substr problem, use  for{while{L}}, slide L
//3.find longest nonrepeating substr len in a str/ eg.'abcaabbccczdsjdf'
//424. Longest Repeating len substr in a str after Replacing K/characterReplacement("ABBBCCC",0);
//567.is there subarr Permutation str1 in strs2,t/f?/checkInclusion('ab',"eidoaboo");
//76. Minimum Window Substring/ give mininum windows in s str that include t str/eg. Input: s = "ADOBECODEBANC", t = "ABC"/Output: "BANC"
//5. Longest Palindromic Substring/ return longest continuious substr .ep.'babad' ->'bab'


//1. Two Sum / console.log(twoSum([2,7,11,15],9))->[0,1]return 2 ind that add to sum
//560. Subarray Sum Equals K,find count of subarr sum that equ to k//!use map to find each k sum
//238. Product of Array Except Self/output each index location product of entire array except curr index [1,2,3,4]->[24,12,8,6]//!use 2 sides loop to find each sum

//!two slider, find complatible items(sums to k or min,max)
//167. Two Sum II - given 1-indexed Sorted up Array, return two index that sum up k. . same as 1. but sorted and use constant extra space/ eg,Input: numbers = [2,7,11,15], target = 9.Output: [1,2]
//11. Container With Most Water
//15. 3Sum,return all 3 index sum equals 0/[-1,0,1,2,-1,-4]->[[-1,-1,2],[-1,0,1]]

//!Binary search
//153. Find Minimum number in unique Rotated Sorted Array/findMin([4,5,6,7,0,1,2]) ->0;
//154. Find Minimum in Rotated Sorted Array (number in arr can be repeated). eg.[4,5,6,7,0,1,4] ->0
//744. Find Smallest Letter Greater Than Target lexicolgraphically/nextGreatestLetter(["x","x","y","y"],"z")
//162. Find Peak num,A peak num is strictly greater than its neighbors.eg.([1,2,1,3,5,6,4]),must runs in O(log n) time.
//33. Search target in Rotated distinct Sorted Array.eg. Input: nums = [4,5,6,7,0,1,2], target = 0.Output: 4
//34. Find First and Last Position of Element in Sorted Array/searchRange([5,8,8,8,8,8,10],8)
// 875. Koko Eating Bananas




//****************************************************************************************************************** */


//3.find longest nonrepeating substr len in s
var lengthOfLongestSubstring = function(s) {
  if(s.length<2)return s.length
    let L=0;
    let hash={}
    let max=1;
    for(let i=0;i<s.length;i++){
      while( hash[s[i]]){delete  hash[s[L]]; L++;}//!important concept, cut the start item not the current item .ep.[a,v,a,c]
      hash[s[i]]=1;
      max=Math.max(i-L+1,max)
    }
return max
}

//424. Longest Repeating len in s after Replacing K
function characterReplacement(s, k) {
  let max = 0;
  let mF = 1;
  let M = {};
  let L=0;
  for (let i = 0; i < s.length; i++) {
    M[s[i]] = (M[s[i]] || 0) + 1;
    mF = Math.max(mF, M[s[i]]);
    while (i - L + 1 - mF > k && L <i) {  M[s[L]]--; L++; }
    max = Math.max(max, i - L + 1)
    //!most mF doesnt need to reduce, bc even its incorrect, max result is the same
    //eg. ABBBCEAZAFD--->BBBis the mF, max length is already found when mF is found
  }
  return max;
}
//567.is there subarr Permutation s1 in strs2,t/f?
var checkInclusion = function(s1, s2) {
  let M={};
  let count=0;
  let len=s1.length;
  s1.split('').map((x)=>{
   if(M[x]==null){M[x]=1;count++}
   else M[x]++;
  })
  
  for(let i=0;i<s2.length;i++){
    M[s2[i]]--; //reduce each char in map
    if(M[s2[i]]===0){count--;if(count===0)return true}
    if(i+1-len>=0){ //add it back if still not true after s1.len is passed
         if(M[s2[i+1-len]]===0)count++;
         M[s2[i+1-len]]++;}
  }
  return false;
  }//console.log(checkInclusion('ab',"eidoaboo"));
//76. Minimum Window Substring/ give mininum windows in s that include t/eg. Input: s = "ADOBECODEBANC", t = "ABC"/Output: "BANC"
var minWindow = function (s, t) {
  let L = 0;
  let M = {};
  let count = 0;
  let ans = s;
  let match = false;
  t.split("").forEach((v) => {  M[v] = ~~M[v] + 1;  count++;});
  for (let x = 0; x < s.length; x++) {
    if (M[s[x]] != null) {
      if (M[s[x]] > 0) count--;//! count only decrease when its more than 0!!
      M[s[x]]--;
      if (count === 0) {
        match = true;
        if (x - L + 1 < ans.length) ans = s.slice(L, x + 1);
      }
      while (count === 0) {//!! shrinking windows to find mininum solution
        if (M[s[L]] != null) {
          M[s[L]]++;
          if (M[s[L]] > 0) count++;//!!important! only increase count if its more than 0!
        }
        L++;
        if (count === 0)  if (x - L + 1 < ans.length) ans = s.slice(L, x + 1);
      }
    }
  }
  return match ? ans : "";//!incase match remain false and ans is still s
};
//5. Longest Palindromic Substring
var longestPalindrome = function(s) {//0(n^2),s:0(1)
  if (s.length<2) return s;
  let ans='';
for(let i=1;i<s.length;i++) {
      let j = i-1;
      let k = i+1;
      while(s[j] === s[i]) j--;//!determine if this substr is odd or even,expanding only one side
      while(j>=0 && k<s.length) {//!expanding both side if palindromic
          if(s[j] === s[k]) {  j--;  k++;  continue;} 
          else  break;
      }
      if(k-j>ans.length)ans=s.slice(j+1,k);
  }
  return ans;
  };
  
  var longestPalindrome = function(s) {   //! dp method //0(n^2),s:0(n^2)
    const n = s.length;
    const dp = Array(n+1).fill().map(()=>[]);  
    let longest = "";
  
    for (let len = 1; len <= n; len++) {
        for (let row = 0; row < n - len + 1; row++) {
            const col = row + len - 1;
            if (s.charAt(row) == s.charAt(col)) {
                if (len <= 2 || dp[row + 1][col - 1] == true) {
                    dp[row][col] = true;
                    const substr = s.slice(row, col + 1);
                    if (substr.length > longest.length) longest = substr;
                }
            }
        }
    }
    return longest;
  }



//1. Two Sum/return index x and index that sums to target/(twoSum([2,7,11,15],9));//->[0,1]
var twoSum = function(nums, target) {
  let M={}
  for(let x=0;x<nums.length;x++){
  let y=target-nums[x]
  if(M[y]!=null)return [x,M[y]];//!!!!!M[y]can be zero!!!!   be careful !x is used
  M[nums[x]]=x;
  }
  };

//560. Subarray Sum Equals K//!important concpet, find sum in the middle
var subarraySum = function (nums, k) {
  let M = { 0: 1 };//!for subarray from the start!
  let sum = 0;
  let count = 0;
  for (let x of nums) {
    sum += x;
    let left = sum - k;
    if (M[left]) count += M[left];//!if left exist, sum k is in the middle
    M[sum] = ~~M[sum] + 1;
  }
  return count;
};
//238. Product of Array Except Self/[1,2,3,4]->[24,12,8,6]
var productExceptSelf = function(nums) {
  let ans=[1];
  let pos=1;
for(let x=1;x<nums.length;x++)ans[x]=nums[x-1]*ans[x-1]//loops prefix product
for(let x=nums.length-2;x>=0;x--){//loops postfix product
pos=nums[x+1]*pos;ans[x]=pos*ans[x]//combine 2 to get everything except self
}
return ans;
};

//167. Two Sum II -Array Sorted/[2,3,4], target = 6-> return [1,2]must use constant extra space
var twoSum = function(numbers, target) {
  let x=0;let y=numbers.length-1;
let sum= 0
while(x<y){
  sum=numbers[x]+numbers[y]
  if(sum===target){return [x+1,y+1]}
  if(sum>target){y-=1}
  if(sum<target){x+=1}
}
};
//11. Container With Most Water
var maxArea = function (height) {
  let L = 0;
  let R = height.length - 1;
  let maxv = 0;
  while (L < R) {
    maxv = Math.max(maxv, Math.min(height[L], height[R]) * (R - L));
    if (height[L] > height[R]) R--;//! important concept, take two sides and shrink
    else L++;
  }
  return maxv;
};
//15. 3Sum,return all 3 index sum equals 0/[-1,0,1,2,-1,-4]->[[-1,-1,2],[-1,0,1]]
var threeSum = function(nums) {
  nums.sort((a,b)=>a-b)
 let ans=[];
    for(let x=0;x<nums.length-2;x++){
      if(ans.length&&ans[ans.length-1][0]===nums[x])continue;
let L=x+1;
let R=nums.length-1;
while(L<R){
  let sum=nums[x]+nums[L]+nums[R]
  if(sum===0){ans.push([nums[x],nums[L],nums[R]]);L++;while(nums[L]===nums[L-1])L++;}
  else if(sum<0){L++;while(nums[L]===nums[L-1])L++;}
  else {R--;while(nums[R]===nums[R+1])R--;}
}
    }
    return ans
};
//153. Find Minimum number in Rotated unique Sorted Array. eg[4,5,6,7,0,1,2]->0
var findMin = function(nums) {
  let L=0;
  let R=nums.length-1;
  while(L!=R){
    let   M=~~((R-L)/2)+L;///!put M in the while loop to avoid define twice
    if(nums[M]>nums[R])L=M+1;
    else R=M;
}
  return nums[L]
  };//console.log(      findMin([4,5,6,7,0,1,2]));
//154. Find Minimum in Rotated Sorted Array (number in arr can be repeated). eg.[4,5,6,7,0,1,4] ->0
var findMin = function(nums) {
  let L=0;let R=nums.length-1;
  while(L<R){
    let M=L+Math.floor((R-L)/2);////!put M in the while loop to avoid define twice
    if(M>0&&nums[M]<nums[M-1]) return nums[M]
  else if(nums[M]>nums[R]){L++}else{R--}
  }
  return Math.min(nums[L],nums[R])
      };
//744. Find Smallest Letter Greater Than Target lexicolgraphically
var nextGreatestLetter = function(letters, target) {
  let L=0;
  let R=letters.length-1;
  while(L<R){
    M=~~((R-L)/2)+L;
    if(letters[M]<=target)L=M+1;
  else R=M;
  }
  return letters[R]>target? letters[R]:letters[0]//!return [0] if not found
    };
//162. Find Peak num,A peak num is strictly greater than its neighbors.must runs in O(log n) time.eg.[1,2,1,3,5,6,4]->return index 1 or 5
var findPeakElement = function (nums) {
  let L = 0;
  let R = nums.length - 1;
  while (L < R) {
    let M = ~~((R - L) / 2) + L;
    if (nums[M] < nums[M + 1]) L = M + 1;
    else R = M;
  }
  return L;
};
//33. Search target in Rotated distinct Sorted Array.eg. Input: nums = [4,5,6,7,0,1,2], target = 0.Output: 4
var search = function (nums, target) {
  let L = 0;
  let R = nums.length - 1;
  while (L < R) { //!! set the condition not crossing intead of L!=R bc L/R is sett M+1/M-1;
    let M = ~~((R - L) / 2) + L;
    if (nums[M] === target) return M;
    if (nums[M] > nums[R]) {
      if (nums[M] > target && nums[L] <= target) R = M - 1;//!make condition according to the monolitic side, need to use two condition bc [0,1,2] and [5,1,2] cant be decided w/ one condition
      else L = M + 1;
    } else {
      if (nums[M] < target && nums[R] >= target) L = M + 1;
      else R = M - 1;
    }
  }
  return nums[L]===target? L:-1;
};//console.log(  search([1,3],  0));

//34. Find First and Last Position of Element in Sorted Array
var searchRange = function(nums, target) {

    let L=0;let R=nums.length-1;
    let x1=-1;x2=-1
    while(L<=R){
      let M=L+Math.floor((R-L)/2)
      if(nums[M]>=target){R=M-1}else{L=M+1}
      if(nums[M]===target)x1=M//!!x1 is found at the start, but will learn Left bc we set R to M even when M is the anwer
    }//! and save before go left out of bound
     L=0; R=nums.length-1;
     while(L<=R){
      let M=L+Math.floor((R-L)/2)
      if(nums[M]<=target){L=M+1}else{R=M-1}//! set L to M to make it lean Right
      if(nums[M]===target)x2=M
    }
  return [x1,x2]
  };// console.log(searchRange([5,8,8,8,8,8,10],8));

// 875. Koko Eating Bananas
var minEatingSpeed = function(piles, h) {    
  let left = 1;
  let right = Math.max(...piles);
  while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      const hoursNeeded = calcHours(mid);
      if (h < hoursNeeded) left = mid + 1;
      else right = mid;
  }
return left;

function calcHours(k) {
      let count = 0; 
      for (const pile of piles) count += Math.ceil(pile / k);
      return count;
  }
};


