//DP distinct way patterns/
//1.Fibo(climb stair,house robber,fibo #,candy(fibo both direction,jump game)//!iterate
    //greedy(buy sell stock,maxmium subarr sum(conti)kadane's algo)/interger break/interger perfect square)/max subarr product
    //!greedy iterate on 2 items/(kadane)use 2 greedy to decide head and tail/use looping 2 greedy step at this point to find max/use lopping greedy to find min sqr at each point/greedy interate on 2 items and keep a global max
//2.0/1knapsack,if used only once (partition equal subset sum,target sum,474?,494?)//!2d arr is used to avoid overstepping whats added on current row,extra r&c for base case
//3.unbounded knaps(coin change1,coin change2,combination sum,all combo in every order,any order,decode ways,word break)//!use 0-sum arr/use 0-sum,extra to initiate dp/0-sum arr,add count at each length/use 0-sum, pass true to next
//4.LCommonS(not conti),delete operation to match//interwaving/longest repeated sub(conti)//!use 2d arr diagonal,extra r&c bc algo/use 2d arr diagonal,extra r&c bc r or c first/use 2d arr diaogonal extra r&c for algo,greedy to record max
    //LIncreasS(not conti.)/number of LIS/longest str chain//!build arr to track paths,use greedy to keep it 1d/build arr using greedy and add count arr to track each path
//5.palindrome(longest palin substr(not conti),palin substr)//!use 2d arr diagonal,no extra space


//312. Burst Balloons/matrix chain multification//~hard

//70. Climbing Stairs
//62. Unique Paths
//63. Unique Paths II(w/ obsicle
//64. Minimum Path Sum
//322. Coin Change//console.log(coinChange([3,5,7],11))->3 ans few count of coin needed
//198. House Robber/[1,2,3,1]find max profit//!both
//213. house Robber/ same as 198,except start and end is connected
//135. Candy,give min 1,more if better grade/console.log(  candy([1,2,87,87,87,2,1]))ans min total candy
//121. Best Time to Buy and Sell Stock//console.log(maxProfit( [7,1,5,3,6,4]))ans profit
//1143. Longest Common Subsequence//console.log(longestCommonSubsequence1("pabcdef","acefp"));//!both
//39. Combination Sum(([2,3,6,7], target = 7)->[[2,2,3],[7]])
//53. Maximum Subarray sum//console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]));ans max
// 152. Maximum Product of continoous Subarray. //[-4,-3,-2]=> 12
// 583. Delete Operation for Two Strings(str1,str2)return min count
//377. Combination Sum IV//console.log(combinationSum4([1,2,3],4))return count
//416. Partition Equal Subset Sum,t/f?// console.log(canPartition([3,3,3,4,5]));
//91. Decode Ways/s = "226"-> 3, "226"= "BZ"(2 26)"VF"(22 6)or "BBF" (2 2 6)find count
//139. Word Break,t/f?// console.log(wordBreak("leetcode", ["leet","code"]));can a(str) segmented into b(array)?//!both


//top down/bottom up memoization
// dfs approach top down //o(n*m)n is target or cache size, m is nums or input,
// dp apporach bottm up// recurrent relation//usually for max effeciency/ dp0,dp1,dp2....,then dp(target)=dp[target-0]+dp[t-1]+dp[t-2]... 

// Find recursive relation
//1 Recursive (top-down)
//2 Recursive + memo (top-down)
//3 Iterative + memo (bottom-up)
//4 Iterative + N variables (bottom-up)

//fib,dfs 0(n^2)& 0(n)/fib,dfs+m 0(n)& 0(n)/fib
//****************************************************************************************************************** */
//70. Climbing Stairs// s.o(n)/t.o(n)
//n steps reach to top, how many ways reaching to top?
var climbStairs = function(n) {
  let dp=[,1,2];
  for(let i=3;i<=n;i++){
dp[i]=dp[i-1]+dp[i-2]//optional substructure
}
return dp[n];
}
// 62. Unique Paths S:O(n),T:O(n)//console.log(uniquePaths(3,4));
var uniquePaths = function(m, n) {
  let dp=new Array(m).fill().map(()=>(new Array(n).fill(1)))
  //or use loop.Dont use map as map doesnt self mutate!!!!
for(let i=1; i<dp.length;i++){
for(let j=1;j<dp[0].length;j++){
  dp[i][j]=dp[i-1][j]+dp[i][j-1];  }
}
return dp[m-1][n-1];
}
//63. Unique Paths II//console.log(uniquePathsWithObstacles( [[0,0,0],[0,1,0],[0,0,0]]));
var uniquePathsWithObstacles = function(grid) {
  const cCount = grid[0].length;
  const row = new Array(cCount).fill(0);
  row[0] = 1;
  for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < cCount; c++) {
          if (grid[r][c]) row[c] = 0;
          else if (c) row[c] += row[c - 1];
      }
  }
  return row[cCount - 1];
};
//64. Minimum Path Sum
var minPathSum = function(grid) {
  let m = grid.length;
   let n = grid[0].length;
   let dp = Array(m).fill(0).map(() => Array(n).fill(0));
   dp[0][0] = grid[0][0];
   for (let i = 1; i < n; i++) dp[0][i] = dp[0][i - 1] + grid[0][i];
   for (let i = 1; i < m; i++)  dp[i][0] = dp[i - 1][0] + grid[i][0];
   for (let i = 1; i < m; i++)  for (let j = 1; j < n; j++)   dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
   return dp[m - 1][n - 1];
 }

 //322. Coin Change//console.log(coinChange([3,5,7],11));
 var coinChange = function(coins, amount) {
  let m=Array(amount+1).fill(Infinity);
  m[0]=0;
  for(let a=1;a<=amount;a++){
  for(let i=0;i<coins.length;i++){
  let left=a-coins[i]
  if(left>=0)m[a]=Math.min(m[left]+1,m[a]);
    }
  }
  return m[amount]==Infinity? -1:m[amount]
  };
//198. House Robber//o(n)o(n)//console.log(rob( [2,7,9,3,1]));answer 12
var rob = function(nums) {
  let n=nums.length;
  let dp=new Array(n-1).fill(0);

  dp[0]=nums[0];
  dp[1]=Math.max(nums[0],nums[1]);//base of 0 and 1

for(let x=2;x<nums.length;x++){
  dp[x]=Math.max(nums[x]+dp[x-2],dp[x-1])//recursive relations
}
    return dp[n-1];
};
var rob1 = function(nums) {//1 recursive top down//t:o(2^n),
  return dfs(nums.length-1);//!! return final nums!!!

  function dfs(i){
  if(i<0) return 0;
  return Math.max(dfs(i-2)+nums[i],dfs(i-1));
  }

  };

var rob2 = function (nums) {//2 recursive +memo (1,add array, 2,assign each ans into array)//t:o(n),s:o(n)
  let mem = new Array(nums.length - 1).fill(-1); //1
  function dfs(i) {
    if (i < 0) return 0; //base case!use return 0 to add value from the base
    if (mem[i] >= 0) return mem[i]; //2
    return mem[i] = Math.max(dfs(i - 2) + nums[i], dfs(i - 1));
  }
  return dfs(nums.length - 1); //!! return final nums!!!
};

var rob3 = function (nums) { //3 iterative +memo (bottom up)
  let n = nums.length;
  let dp = new Array(n - 1).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]); //base of 0 and 1

  for (let x = 2; x < nums.length; x++) {
    dp[x] = Math.max(nums[x] + dp[x - 2], dp[x - 1]); //recursive relations
  }
  return dp[n - 1];
};

var rob4 = function (nums) { //4 iterative +2 variable(buttom up)//use 2 variable instead bc only 2 step back x-1 and x-2
  let n = nums.length;
  if (n === 0) return 0;
  let pre1 = 0;
  let pre2 = 0;
  for (let n of nums) {
    let tmp = pre1; //recursive relations
    pre1 = Math.max(pre2 + n, pre1);
    pre2 = tmp;
  }
  return pre1;
};
//213. house Robber/ same as 198,except start and end is connected
var rob = function(nums) {
  if (nums.length < 3) return Math.max(...nums); 
  let dp2 = nums.slice(1);
  nums.pop();
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i] + (nums[i - 2] || 0), (nums[i-1] || 0))
    dp2[i] = Math.max(dp2[i] + (dp2[i - 2] || 0), (dp2[i-1] || 0))
  }
return Math.max(nums.pop(), dp2.pop())
};
var rob2 = function(nums) {
  const len = nums.length;
  if(len === 1) return nums[0];
  let odd1 = 0, odd2 = 0, even1 = 0, even2 = 0;
  for(let i = 0; i < len; i++) {
      if(i > 0) {
          let curr = Math.max(even2, nums[i] + even1);
          even1 = even2;
          even2 = curr;   
      }  
      if(i < len - 1){
          let curr = Math.max(odd2, nums[i] + odd1);
          odd1 = odd2;
          odd2 = curr;   
      }
  }
  return Math.max(odd2, even2);
};
//135. Candy
var candy = function(ratings) {//console.log(  candy([1,2,87,87,87,2,1]));
  let m=Array(ratings.length).fill(1)
  let count=1;
  for(let x=1;x<ratings.length;x++){
if(ratings[x]>ratings[x-1]){m[x]=m[x-1]+1;count+=m[x];}
else count++
  }
for(let x=ratings.length-1;x>0;x--){//!! best solution is n^2, loop from left and right once! instead of run while loop a few times
if(ratings[x-1]>ratings[x]&&m[x-1]<=m[x]){let y=m[x]+1-m[x-1];m[x-1]+=y;count+=y}
}
return count
  };
  var candy = function (ratings) {
    let m = Array(ratings.length).fill(1);
    for (let x = 1; x < ratings.length; x++) if (ratings[x] > ratings[x - 1]) m[x] = m[x - 1] + 1;
    for (let x = ratings.length - 1; x > 0; x--)  if (ratings[x - 1] > ratings[x] && m[x - 1] <= m[x])   m[x - 1] = m[x] + 1;
    let ans = m.reduce((a, b) => a + b);
    return ans;
  };
//121. Max profit to Buy and Sell Stock//console.log(maxProfit( [7,1,5,3,6,4]));
var maxProfit = function(prices) {
  let B= prices[0];
  let prof=0;
 for(let x=1;x<prices.length;x++){
prof=Math.max(prof,prices[x]-B)
B=Math.min(B,prices[x])
 }
return prof;
};
//1143. Longest Common Subsequence//console.log(longestCommonSubsequence1("pabcdef","acefp"));

var longestCommonSubsequence1 = function (text1, text2) {
  const m = {};
  return dfs(text1.length - 1, text2.length - 1);

  function dfs(ind1, ind2) {
    if (ind1 < 0 || ind2 < 0) return 0; // base cases
    if (m[ind1 + "&" + ind2]) return m[ind1 + "&" + ind2];//recall
    if (text1[ind1] === text2[ind2]) return dfs(ind1 - 1, ind2 - 1) + 1;
    else return (m[ind1 + "&" + ind2] = Math.max( dfs(ind1, ind2 - 1), dfs(ind1 - 1, ind2)  ));
  }
};

var longestCommonSubsequence1 = function (text1, text2) {//make memo into array faster!!//make memo into array faster!!// o(t1*t2),o(t1*t2+0(max(t1len,t2len)))
  let m=new Array(text1.length).fill([]).map(()=>new Array(text2.length).fill(0))
  return dfs(text1.length - 1, text2.length - 1);

  function dfs(ind1, ind2) {
    if (ind1 < 0 || ind2 < 0) return 0; // base cases
    if (m[ind1][ ind2]) return m[ind1][ ind2];//recall
    if (text1[ind1] === text2[ind2]) return dfs(ind1 - 1, ind2 - 1) + 1;
    else return (m[ind1] [ ind2] = Math.max( dfs(ind1, ind2 - 1), dfs(ind1 - 1, ind2)  ));
  }
};
var longestCommonSubsequence = function(text1, text2) {
  let m=new Array(text1.length+1).fill([]).map(()=>new Array(text2.length+1).fill(0))//dont forget to add one/y axis then x axis
  //use 2d matrix bc there are many match, but we are looking for longest consequtive matches 
  //add extra row and col bc its works better with algorithum
for(let x=1;x<m.length;x++){
  for(let y=1;y<m[0].length;y++){
 if(text1[x-1]===text2[y-1])m[x][y]=m[x-1][y-1]+1;//array is +1 row and col, so then text[m-1]matches, mark on m[x]
  else m[x][y]=Math.max(m[x-1][y],m[x][y-1]); }
  }
    console.log(m);
    return m.at(-1).at(-1)
  }
//39. Combination Sum,output all variation, any order(all candiate same frequency)

var combinationSum = function(candidates, target) {//t:0(2^t)///!height of tree is target,o(candidatee^target)brute force
  //candidate sorting is not needed
  let m=Array(target+1).fill().map(()=>[]);//or use array
 return dfs(0,target);
 
function dfs(ind,left)
{ if(m[left][ind])return m[left][ind];//if ind not included, m will have same arrays with different variation
  if(left===0)return [[]];//!!take the child apart and add candidate indivisaully,flatten it and push into combo eg.add2to[[3],[4]]->push(...[[3,2],[4,2]])
  let segment=[];
  for(let i=ind;i<candidates.length;i++){//cant use for of bc you dont want to loop back
    if(left-candidates[i]>=0)//dont put this before for of, bc you shouldnt push until verified!! if put at the front return [] should be used
    {let seg=dfs(i,left-candidates[i]);
    segment.push(...seg.map(s=>[candidates[i],...s]))}
  }
return m[left][ind]=segment;
}}
console.log(combinationSum([8,7,4,3],11))


var combinationSum2 = function (candidates, target) {//!no sorting needed for all methods
  let m = [];//m=[]works too!!
  for (let i = 0; i <= target; i++) {
    let combo = [];
    for (let can of candidates) {
      let left = i - can;
      if (left < 0) continue;
      else if (left === 0) combo.push([can]);
      else {   m[left].map(x=>{ 
        if(can>=x[0])  combo.push(   [can].concat(x))   })  } }
    m[i] = combo;
  }
  return m[target];
};
var combinationSum = function (candidates, target) {
  let m = Array(target + 1).fill(null);
  m[0] = [[]];
  for (let c = 1; c <= target; c++) {
    let combo = [];
    for (let x of candidates) {
      let left = c - x;
      if (m[left] != null) {
   m[left].map((i) => {   if (!i.length || i[i.length - 1] <= x) combo.push(i.concat(x));
        }); } }
    m[c] = combo;
  }
  return m[target];
};

//53. Maximum Subarray sum//console.log(maxSubArray( [-2,1,-3,4,-1,2,1,-5,4]));//Kadane's algo
var maxSubArray = function(nums) {
  let max=nums[0]
  let sum=nums[0]
  for(let i=1;i<nums.length;i++){
    sum=Math.max(sum+nums[i],nums[i])//!!find if head of the max should change
    max=Math.max(sum,max)//!!find if tail of the max should stop
  }
  return max
  };
  //152. 152. Maximum Product of continoous Subarray. //[-4,-3,-2]=> 12
  var  maxProduct= function(nums) {
    let min=nums[0];
    let max=nums[0];
    let ans=nums[0]
    for(let x=1;x<nums.length;x++){
  let temp=max;//!is nessary to prevent min from taking changed max
    max=Math.max(min*nums[x],temp*nums[x],nums[x])//! temp is used in place of max
    min=Math.min(min*nums[x],temp*nums[x],nums[x])
    ans=Math.max(ans,max)
    }
    return ans
      };
  //583. Delete Operation for Two Strings
var minDistance = function(word1, word2) {
  let L1=word1.length;
  let L2=word2.length;
    let m=Array(L1+1).fill().map(()=>Array(L2+1).fill(0))
 
    for(let x=1;x<=L1;x++){
      for(let y=1;y<=L2;y++){
        if(word1[x-1]===word2[y-1])m[x][y]=m[x-1][y-1]+1;//make sure to ajust the index poistion
        else m[x][y]=Math.max(m[x-1][y],m[x][y-1])
      }
    }
    return L1+L2-m[L1][L2]*2;
};

//377. Combination Sum IV//console.log(combinationSum4([1,2,3],4))/find all possible combo in 'every' order,ans is count!!
var combinationSum4 = function (candidates, target) {
  //!! candidates sort not nessasry
  let m = Array(target + 1).fill(null);
  m[0] = 1
  for (let c = 1; c <= target; c++) {
    let combo = 0
    for (let x of candidates) {
      let left = c - x;
      if (m[left] != null)combo+=m[left] }
    m[c] = combo;
  }
  return m[target];//!! ans is count
};

//416. Partition Equal Subset Sum//;
var canPartition = function (nums) {
  let sum = nums.reduce((a, b) => a + b);
  if (sum % 2 !== 0) return false;

  let m = Array(nums.length+1) .fill() .map(() => Array(sum / 2 + 1).fill(false));
//!2d arr is used to avoid overstepping whats added on current row
  m[0][0] = true;
  for (let y = 1; y <= nums.length; y++) {
    for (let x = 0; x <= sum / 2 + 1; x++) {
      if (m[y - 1][x]) {m[y][x] =true;//
      m[y][x + nums[y-1]] = true;}//! true is only added based on the previous row
    }
  }

  return m[nums.length  ][sum / 2];
};

//91. Decode Ways
var numDecodings = function (s) {
  let m = Array(s.length + 1).fill(0);
  m[0] = 1;
  for (let i = 0; i <= s.length; i++) {
    for (let L = 1; L <= 26; L++) {
      let LL=String(L)
      if (m[i] !== 0) {
        if (s.slice(i).indexOf(LL) === 0)
          m[i + LL.length] += m[i];
      }
    }
  }
  return m[s.length];
};
// console.log(numDecodings('06'));

//139. Word Break,can all segment b made into a
var wordBreak = function(s, wordDict) {
  let m=Array(s.length+1).fill(false);
  m[0]=true;
  for(let x=0;x<s.length;x++){
for(let word of wordDict){
if(m[x]===true)if(s.slice(x).startsWith(word))m[x+word.length]=true;
}
  }
    return m[s.length]
};
var wordBreak = function (s, wordDict) {
  let m={}
  return dfs(s);
  function dfs(str) {
 if(m[str]!=null)return m[str];
    if (str.length === 0) return true;
    for (let i = 0; i < wordDict.length; i++) {
      console.log(str);
      if (str.startsWith(wordDict[i])) {
        let x = dfs(str.slice(wordDict[i].length));
        if (x === true) return m[str]=true;//!! important concept!
      }
    }
    return m[str]=false;
  }
};
// console.log(wordBreak("leetcode", ["leet","code"]));

