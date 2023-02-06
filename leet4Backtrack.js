
//17. Letter Combinations of a Phone Numbe/letterCombinations('234')
//22. Generate n Parentheses 3->answer:["((()))","(()())","(())()","()(())","()()()"]
//93. Restore IP Addresses/s = "25525511135"->["255.255.11.135","255.255.111.35"]
//46. Permutations of dinstinct num arr .return all possibility//console.log(permute([1,2,3])->[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
//47. Permutations of (not distinct num)arr II,rturn all//console.log(permute3([1,1,3]))->[[1,1,2],[1,2,1],[2,1,1]]
//39. Combination Sum([2,3,6,7], target = 7)->[[2,2,3],[7]]
//40. Combination Sum II(has repete) [10,1,2,7,6,1,5], target = 8)->[[1,1,6],[1,2,5],[1,7],[2,6]]
//216. Combination Sum III,find all k nums that sum to n(k = 3, n = 9)-> [[1,2,6],[1,3,5],[2,3,4]]
//78. Subsets//console.log(subsets([1,2,3]));find all subset  [1,2,3]-> [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
//90. Subsets II(has repeat) [1,2,2]->Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]
//131. Palindrome Partitioning//console.log(partition("aab"));->[["a","a","b"],["aa","b"]]

// backtracking pseudocode// involves storing info into the function call
// let solve(){
//     if(no more choices)//base case
//           return ;
//     for(all avaiable choices){
//         try one choice c;
//             solve from here, if works out, youare done
//         if(solve(c)return)return true;
//         unmake choice c;
//     }
//     return false//tried all choices, no soln found
// }//https://www.youtube.com/watch?v=NdF1QDTRkck&ab_channel=Stanford
//backtracking runtime
//https://leetcode.com/discuss/interview-question/3055778/how-to-calculate-runtime-of-backtracking-algorithm-in-interview
//****************************************************************************************************************** */
//17. Letter Combinations of a Phone Number// o(4^n)& o(n)//bc wxyz is 4 digits
//console.log(letterCombinations('234'))
var letterCombinations = function (digits) {
  let phone = [, , "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let ans = [];
  if (!digits.length) return ans;
  dfs(0, "");
  return ans;

  function dfs(ind, str) {
    if (ind === digits.length) return ans.push(str);
    for (let i of phone[digits[ind]]) dfs(ind + 1, str + i);//!not ind++! ind++ is a statement, not a number
  }
};
//22. Generate Parentheses//0(2^n),0(k+n)
var generateParenthesis = function(n) {
  let ans = [];
  dfs(0, 0, '');
  return ans

 function dfs (left, right, cur) {
    if (left === n && right === n) return ans.push(cur);
    if (left > right ) dfs(left, right + 1, cur+')');
    if (left < n) dfs(left + 1, right, cur+'(');
  }
};
//93. Restore IP Addresses//0(3^4),0(1)
var restoreIpAddresses = function (ss) {
  let ans = [];
  dfs([], ss);
  return ans;

  function dfs(arr, s) {
    if (arr.length === 4 && !s) return ans.push(arr.join("."));//!s===null doesnt work! use !s or s!=''
    if (!s || arr.length === 4) return;
    if (s.slice(0, 2) >= 10) dfs(arr.concat(s.slice(0, 2)), s.slice(2));//!prevent overcut and restrict >10
    if (s.slice(0, 3) <= 255 && s.slice(0, 3) >= 100) dfs(arr.concat(s.slice(0, 3)), s.slice(3));
    if (s.slice(0, 1) <= 10) dfs(arr.concat(s.slice(0, 1)), s.slice(1));
  }
}

//46. Permutations//console.log(permute([1,2,3]));//0(n!),0(n)
var permute = function (nums) {
  if (nums.length === 1) return [nums];
  if (nums.length === 2)
    return [
      [nums[0], nums[1]],
      [nums[1], nums[0]],
    ];
  //return nums.flatMap((n)=>{return permute(nums.filter(i=>i!==n)).map(i=>[n,...i])})};
  return nums.map((n) => {
    let rest = nums.filter((i) => i !== n);
    let per = permute(rest);
    return per.map((i) => [n, ...i]);
  });
};
var permute2 = function (nums) {//o(n!*n)
  let ans=[];
  dfs([]);
  return ans;

  function dfs(cur) {
    if (cur.length === nums.length) return ans.push([...cur]);
    for (let n of nums) {
      if (!cur.includes(n)) {
        cur.push(n);
        dfs(cur);//push and pop is outside of prop
        cur.pop();
      }
    }
  }
};
var permute3 = function (nums) {//o(n!*n)
  let ans=[];
  dfs([]);
  return ans;

  function dfs(cur) {
    
    if (cur.length === nums.length) return ans.push(cur);//no ...cur bc concat is used

    for (let n of nums) {
      if (!cur.includes(n)) {
        dfs(cur.concat(n));//changed is made in the prop directedly//fastest!!
      }
    }
  }
};
var permute4 = function (nums) {//o(n!*n)
  let ans=[];
  dfs(0,nums);
  return ans;
  function dfs(i, nums) {
    if (i === nums.length) return ans.push([...nums]);

    for (let j=i; j<nums.length;j++) {
      console.log(nums,i);
[nums[i],nums[j]]=[nums[j],nums[i]]
        dfs(i+1,nums);
        [nums[i],nums[j]]=[nums[j],nums[i]];
      }
    }
  }
//47. Permutations II//console.log(permute3([1,1,3]));//0(n!)
var permuteUnique = function(nums) {
  let ans=[];
 dfs(0,nums);
 return ans;
 
 function dfs(i,cur){
   let M={};
   if(i===nums.length-1){ans.push([...cur])}
   for(let j=i;j<nums.length;j++){
   
 if(M[cur[j]])continue;//use hash to prune tree
 M[cur[j]]=true;
 [cur[i],cur[j]]=[cur[j],cur[i]];
 dfs(i+1,cur);
 [cur[i],cur[j]]=[cur[j],cur[i]];
   }
 }
 };
 var permuteUnique = function (nums) {
  let m = {};
  nums.map((x) => (m[x] = ~~m[x] + 1));//! use m to force only select unique number
  let ans = [];
  dfs([]);
  return ans;
  function dfs(cur) {
    if (cur.length === nums.length) return ans.push(cur);
    for (let x in m) {
      if (m[x] >= 1) {
        m[x]--;
        dfs(cur.concat(x));
        m[x]++;
      }
    }
  }
};
 //39. Combination Sum//o(n**t/n+1)&o(t/n)//console.log(combinationSum([8,7,4,3],11) );
var combinationSum = function(candidates, target) {
  let ans=[];
  candidates.sort((a,b)=>a-b)//incase candidate is not sorted
  dfs(0,0,[]);

  function dfs(ind, sum, cur) {
    if (sum === target) return ans.push([...cur]);

    for (let i = ind; i < candidates.length; i++) {
      if (target-sum<candidates[i]) return;
      cur.push(candidates[i]);
      dfs(i, sum + candidates[i], cur);//keep adding the same value
      cur.pop();
    }
  }
  return ans
};
var combinationSum2 = function(candidates, target) {// https://www.youtube.com/watch?v=ggorLkkuHcg&ab_channel=AlgoJS
  let dp=[[[]]];
  candidates.sort((a,b)=>a-b)//incase candidate is not sorted

  for (let sum = 0; sum <= target; sum++) {
    dp[sum] = [];
    let combine = [];

    for (let i = 0; i < candidates.length && candidates[i] <= sum; i++) {
      console.log(combine,dp);
      if (sum === candidates[i]) {
        combine.push([candidates[i]]);
      } else {
        for (let prev of dp[sum - candidates[i]]) {
          if (candidates[i] >= prev[prev.length - 1]) {
            combine.push([...prev, candidates[i]]);
          }
        }
      }
        dp[sum] = combine;
      }
    }
}
//40. Combination Sum II
var combinationSum2 = function(candidates, target) {//console.log(combinationSum2([10,1,2,7,6,1,5],8));
  let ans=[];
  candidates.sort((a,b)=>a-b);
  dfs(0,0,[]);

  return ans;

  function dfs(ind, sum, cur){
    if(sum===target)return ans.push([...cur])

  for(let i =ind;i<candidates.length;i++){//always start w/ index, and i ++
//index
//  i   ->  i,  --> i, -> i
    console.log(cur);
if(target-sum<candidates[i])return// return stop the function
if(i!==ind&&candidates[i]===candidates[i-1]) continue;//contiue skip 0ne loop(skip when i increased 1 and still same value )
cur.push(candidates[i]);
dfs(i+1,sum+candidates[i],cur);
cur.pop();
  }
  }
};

//216. Combination Sum III
var combinationSum3 = function(k, n) {
    let ans=[];
    dfs(1,0,[]);
function dfs(x,sum,cur){
  console.log(cur);
  if(cur.length===k)if(sum===n)return ans.push([...cur])

  for(let i=x;i<=9;i++){
if(n-sum<i)return;
if(n-sum!==i&&cur.length===k-1)continue;
cur.push(i)
dfs(i+1,sum+i,cur);
cur.pop(x)

  }
}
return ans
};
//78. Subsets//console.log(subsets([1,2,3]));
var subsets = function (nums) {
  let ans = [];
  dfs(0, []);
  function dfs(ind, cur) {
      ans.push([...cur]);//map not needed bc i doesnt go back, so no repeat
    for (let i = ind; i < nums.length; i++) {
      cur.push(nums[i]);
      dfs(i + 1, cur);
      cur.pop();
    }
  }
  return ans;
};
var subsets2 = function (nums) {
  let ans = [];
  dfs(0, []);
  function dfs(ind, cur) {
      ans.push(cur);//map not needed bc i doesnt go back, so no repeat
    for (let i = ind; i < nums.length; i++) {
   
      dfs(i + 1, cur.concat(nums[i]));
   
    }
  }
  return ans;
};
//90. Subsets II
var subsetsWithDup = function(nums) {
  nums.sort((a,b)=>a-b)
    let ans=[];
    dfs(0,[]);
  
function dfs(ind,cur){

ans.push(cur);

for(let i=ind;i<nums.length;i++){
if(i!==ind&&nums[i]===nums[i-1])continue;

dfs(i+1,cur.concat(nums[i]))

}
}
return ans
};
var subsetsWithDup2 = function(nums) {
  nums.sort((a,b)=>a-b)//dont forget to sort
    let ans=[];
    dfs(0,[]);
  
function dfs(ind,cur){
  console.log(cur);
ans.push(cur);

for(let i=ind;i<nums.length;i++){
if(i!==ind&&nums[i]===nums[i-1])continue;

dfs(i+1,cur.concat(nums[i]))

}
}
return ans
};
//131. Palindrome Partitioning//console.log(partition("aab"));
var partition = function(s) {
  let ans=[];
function dfs(ind,cur){
if(ind===s.length)return ans.push([...cur])

  for(let i=ind;i<s.length;i++){
    console.log(s.slice(ind,i+1));
if(i!==ind)if(s.slice(ind,i+1).split('').reduceRight((x,y)=>x+y)!==s.slice(ind,i+1))continue;
  console.log(s.slice(ind,i+1),'333');
  cur.push(s.slice(ind,i+1));//i+1 bc otherwise wouldnt include
  dfs(i+1,cur);///!!! be careful i not ind here
  cur.pop();
}  
};
dfs(0,[]);
return ans;
}
