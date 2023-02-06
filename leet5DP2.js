//DP subsequences
//DP Interger Partition
//PD deciosn making

//300. Longest Increasing Subsequence(not conti.)// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
//1048. Longest String Chain
//516. Longest Palindromic Subsequence// console.log(longestPalindromeSubseq("abcbaa"));
//97. Interleaving String,t/f?s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac" s1+s2=s3?//?hard
//718. Maximum Length of Repeated Subarray,find count//need to be continous subarray//console.log(findLength([1,2,3,2,1],[3,2,1,4,7]))->3,[3,2,1]
//673. Number of Longest Increasing Subsequence(can skip)ans count[1,3,5,4,7]->2, [1, 3, 4, 7] and [1, 3, 5, 7]//?hard
//792. Number of Matching Subsequences.eg. s = "abcde", words = ["a","bb","acd","ace"]
//343. Integer Break//console.log(integerBreak1(10));break n into many ingtr,find max product of ingtr; 10->36 (10 = 3 + 3 + 4, 3 × 3 × 4 = 36.)
//279. Perfect Squares(n)13->2, 13 = 4 + 9 find count of least sqrs

//121. Best Time to Buy and Sell Stock//console.log(maxProfit( [7,1,5,3,6,4])
//122. Best Time to Buy and Sell Stock II/max prof w/ limitless buy/sell
//55. Jump Game[2,3,1,1,4]t/f?can jump from 1st to last?
//****************************************************************************************************************** */
//300. Longest Increasing Subsequence// console.log(lengthOfLIS([10,9,2,5,3,7,101,18]));
var lengthOfLIS = function (nums) {
  let m = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > m.at(-1)) m.push( nums[i] ); // if not greater than tail, replace the first greater index
    else 
    //m[m.findIndex((x) => x >= nums[i])] = nums[i];
    {let l = 0;
    let r = m.length - 1;
    while (l < r) {
      const mid = ((l + r) / 2) >> 0;
      if (m[mid] >= nums[i]) r = mid;
      else l = mid + 1;}
    m[r] = nums[i];}
  }
  return m.length;
};

var lengthOfLIS2 = function (nums) {//loop from the back, if number is greater, replace the smaller number but smaller than next number

  let L = nums.length;
  let m = [nums[L - 1]];
  for (let i = L - 2; i >= 0; i--) {
    if (nums[i] >= m[0]) {
      for (let j = 0; j < m.length; j++) {
        if (nums[i] >= m[j] && (m[j + 1] == null || nums[i] < m[j + 1]))
          m[j] = nums[i];
      }
    } else m.unshift(nums[i]);
  }
  return m.length;
};
//1048. Longest String Chain//0(n*m*m),0(n*m)
var longestStrChain = function(words) {
  words.sort((a, b) => a.length > b.length ? 1 : -1)
  let m = {}
  let ans=1
  for (let j = 0; j < words.length; j++) {
      m[words[j]]=1
      for (let i = 0; i < words[j].length; i++) {
          let x = words[j].slice(0, i) + words[j].slice(i+1)
          if (m[x]) {
              m[words[j]]= Math.max(m[words[j]], m[x] + 1)//! use map to trigger chain extension
              if(ans<m[words[j]])ans=m[words[j]]
          }
      }
  }
  return ans;
}

//516. Longest Palindromic Subsequence
var longestPalindromeSubseq = function (s) {
  let len = s.length;
  let m = Array(len).fill() .map(() => Array(len).fill(0));
  m[0][0] = 1;
  for (let c = 1; c < len; c++) {//!loop in order of col first!
    for (let r = c; r >= 0; r--) {
      if (r === c) m[r][c] = 1;
      else if (s[r] === s[c]) m[r][c] = m[r + 1][c - 1] + 2;
      else m[r][c] = Math.max(m[r + 1][c], m[r][c - 1]);
    }
  }
  return m[0][len - 1];
};// console.log(longestPalindromeSubseq("abcbaa"));
//97. Interleaving String
var isInterleave = function (s1, s2, s3) {
  if (s1.length+s2.length!==s3.length)return false
  let m = Array(s1.length+1).fill() .map(() => Array(s2.length+1).fill(false));//use r and c instead

  for (let y = 0; y <= s1.length; y++) {
    for (let x = 0; x <= s2.length; x++) {
      if(y===0&&x===0)  m[0][0] = true;
      else if (y===0) {if(m[0][x - 1] === true && s2[x-1] === s3[x-1]) m[0][x] = true}//dont mess up s2 matches x and s1 matches to y
      else if (x===0) { if (m[y - 1][0] === true && s1[y-1] === s3[y-1]) m[y][0] = true}
    else if(m[y][x-1] && s2[x-1] === s3[x + y-1]||m[y -1][x] &&s1[y-1] === s3[x + y-1] ) m[y][x]=true;
    }
  }
  return m.at(-1).at(-1);
};

//718. Maximum Length of Repeated Subarray,continous//console.log(findLength( [0,1,1,1,1], [1,0,1,0,1] ));
var findLength = function(nums1, nums2) {
  let L1=nums1.length, L2=nums2.length;
  let m=[...Array(L1+1)].map(()=>Array(L2+1).fill(0))
  let max=0
  for(let r=1;r<=L1;r++){
    for(let c=1;c<=L2;c++){
      if(nums1[r-1]===nums2[c-1]){
        m[r][c]=m[r-1][c-1]+1;max=Math.max(max,m[r][c])}
    }
  }
return max
};

//673. Number of Longest Increasing Subsequence
var findNumberOfLIS = function (nums) {
  let dp = Array(nums.length).fill(1);
  //!keep track of max length at each 'path'(not max lenthg so far!),dp is not monoltic increasing bc there're many path. 
  //!mentaining global max length as each point will mess up count.
  //!eg.([1,2,4,0,3,5,4,7,2])dp is [1, 2, 3, 1, 3, 4, 4, 5, 2]last node took on different path
  //12457
  //0<--4th dp is 1
  //12357
  //12347
  //12<---last dp is 2
  let count = Array(nums.length).fill(1);//!keep track of how many longest subsq(count) at each path(not point)
  
  let maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
  
    for (let j = 0; j < i; j++) { //compare each one from the start
  if (nums[j] < nums[i]) {
  if (dp[j] + 1 > dp[i]) { dp[i] = dp[j] + 1; count[i] = count[j]} //if lenght the same, add lenghh and match count
  else if(dp[j] + 1 === dp[i]) count[i] += count[j];//if lenghth already bigger,meaning theres more max length subsq., add count, not count++ bc all maxlen-1 count needs to be added
      }
    }
    maxLen = Math.max(dp[i], maxLen); //!need to be updated bc max path can be in the middle only
  }
  
  let ans = 0;//!check again to add all count w/ the same max path, there can be many path w max length
  for (let i = 0; i < count.length; i++) {
    if (dp[i] === maxLen) ans += count[i];
  }

  return ans;
  };
//console.log(findNumberOfLIS([1,2,4,0,3,5,4,7,2]));//!!need to return this test to understand
//792. Number of Matching Subsequences//0(n*m),0(m)
var numMatchingSubseq = function(s, words) {
  var result = 0;
  var map = {}
  for (let word of words){ if (isSubsequence(word))result++ }
return result;

function isSubsequence  (word)  {
if (map[word]!=null) return map[word];
let index = -1
for (const w of word){   //!iterate each char start to end, to find index position of the string
  index = s.indexOf(w, index);
  if (index == -1)   return  map[word]=false; }
return  map[word]=true; }
};

//DP Interger Partition

//343. Integer Break//console.log(integerBreak1(10));//break n into many ingtr,find max product of ingtr;
var integerBreak = function(n) {//!!use looping 2 greedy step at this point to find max
  var m = Array(n + 1).fill(0);
  //m[0]=0;
 // m[1]=0;! not needed
  m[2] = 1;
  for(var i = 3; i <= n; i++) {
      for(var j = 1; j < i ; j++) {//f(5)-> 1*f(4)->2*f(3)->3*f(2) 
        let cur= Math.max(m[i - j], i - j);// break it down one by one, is plan number or m[num] greater?
          m[i] = Math.max(cur*j, m[i]);// xnumber thats broken down by, it is greater?
      }
  }
  return m[n];
};

var integerBreak1 = function (num) {
  let m = Array(num + 1);
  return dfs(num);

  function dfs(n) {
 
    if (n < 2) return 0;
    if (m[n]) return m[n];
    let max = 0;

    for (let i = 1; i < n; i++) {
      let cur = Math.max(dfs(n - i), n - i);
      max = Math.max(cur * i, max);
    }
    return m[n] = max
  }
};



//279. Perfect Squares//console.log(numSquares2(13));// return the least number of perfect square numbers that sum to n
var numSquares = function (n) {
  let m = Array(n + 1).fill(Infinity);
  m[0] = 0;
  for (let x = 1; x <= n; x++) {
    for (let i = 1; i ** 2 <= x; i++)   m[x] = Math.min(m[x], m[x - i ** 2] + 1); 
  }
  return m[n];
};
var numSquares2 = function (num) {
  let m = Array(num + 1).fill(Infinity);
  return dfs(num);

  function dfs(n) {
    if (n === 0) return 0;
    if (m[n]!=Infinity) return m[n];//!Infiity is a truely value, so cant be If(m[n])
    for (let x = 1; x ** 2 <= n; x++)   m[n] = Math.min(m[n], dfs(n - x ** 2) + 1);
    return m[n];
  }
};

//DP DECISION MAKING
//121. Best Time to Buy and Sell Stock//console.log(maxProfit( [7,1,5,3,6,4])
var maxProfit = function(prices) {
  let B= prices[0];
  let prof=0;
 for(let x=1;x<prices.length;x++){
prof=Math.max(prof,prices[x]-B)
B=Math.min(B,prices[x])
 }
return prof;
};
// console.log(maxProfit( [7,1,5,3,6,4]));
//122. Best Time to Buy and Sell Stock II
var maxProfit = function(prices) {
  let ans=0;
  let cur=prices[0]
  for(let i=1;i<prices.length;i++){
if(prices[i]>cur)ans+=(prices[i]-cur)
cur=prices[i];
  }
  return ans
};


//55. Jump Game
var canJump = function(nums) {
  let L=nums.length-1
   for(let i=L-1;i>=0;i--){
    if(nums[i]>=(L-i))L=i;

   }
   return L===0? true:false
};
console.log(canJump([3,2,1,0,4]));

