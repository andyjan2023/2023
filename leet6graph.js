//topological sort/type of bfs
//dijkstra algo/type of bfs
//union find/0(log*) 'log star' meaning 1+log(log.n)almost constant, connected by less rank. undirected graph only
//O(E, N)E is edge, N is nodes

//bfs vs dfs
//bfs-  vertex based        /queue/m inefficient/wide  /for shortest path/biparite graph
//dfs-edge(adjacency list)/stack/m efficient/narrow /for two edge connected graph/strongly connected graph/acyclic graph/topological order

//785. Is Graph Bipartite?
//133. Clone Graph
//1091. Shortest Path in Binary Matrix/[[0,0,0],[1,1,0],[1,1,0]]only goes through 0
//207. Course Schedule(2, prerequisites = [[1,0],[0,1]])t/f?
//210. Course Schedule II(numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]])return order array[0,2,1,3]
//743. Network Delay Time(dijkstra)

//547. Number of Provinces([[1,1,0],[1,1,0],[0,0,1]]),return count of provinces
//1319. Number of Operations to Make Network Connected
//721. Accounts Merge
//841. Keys and Rooms

//bit
// 371,191,338,268,190
//****************************************************************************************************************** */
//785. Is Graph Bipartite? eg.given[[1,2,3],[0,2],[0,1,3],[0,2]], graph[0]connect to 1,2,3
var isBipartite = function(graph) {//!two disjointed group, in a graph, no triangle is formed(no loop), t:0(E) for both bfs and dfs
  const m = Array(graph.length);  
  for (let i = 0; i < graph.length; i++) {//!loops is used to check each group
    if (!m[i])if(!dfs(i, 1))return false;
};    
return true;

function dfs(n, Paint) { 
if (m[n]) return m[n] === Paint;//!if exist,return comparison result!
m[n] = Paint;                   //!if not,assign
Paint= Paint===1? 2:1           //!switch paint after assign
for (let x of graph[n]) if (!dfs(x, Paint)) return false ;//! loop is usd to check all connected in one group
return true;//!! need to return true here, or else if it would be false
  }
}
var isBipartite = function (graph) {
  let M = Array(graph.length - 1);
  let q = [];
  for (let x = 0; x < graph.length; x++) {//!loop is used to find check each group, then use queue to check depth
    if (!M[x]) {    M[x] = 1;  q.push(x);   }
    while (q.length) {
      let i = q.pop();
      let group = M[i] === 1 ? 2 : 1;
      for (let j of graph[i]) {
        if (!M[j]) {  M[j] = group;  q.push(j)    } 
        else {   if (M[j] !=group) return false;  }
      }
    }
  }
  return true;
};
//133. Clone Graph
function Node(val, neighbors) {
this.val = val === undefined ? 0 : val;
   this.neighbors = neighbors === undefined ? [] : neighbors;
};

var cloneGraph = function (node) {
let M={};
let q=[node];
while(q.length){
  let x=q.shift();
  if(!x)return null;//!!dont forget base case
  if(!M[x.val])M[x.val]=new Node(x.val)
  for(let i of x.neighbors){
    if(!M[i.val]){
      M[i.val]=new Node(i.val);q.push(i);}
    M[x.val].neighbors.push(M[i.val])
  }
}
return M[node.val]
  };
var cloneGraph = function (node) {
let M={};
return dfs(node);//!!make sure to return value
function dfs(n){
  if(!n)return;
  if(M[n.val])return M[n.val];
  M[n.val]=new Node(n.val)
  for(let x of n.neighbors){
    M[n.val].neighbors.push(dfs(x))}//!!important!! push returned value
return M[n.val]
}
  };

//1091. Shortest Path in Binary Matrix
var shortestPathBinaryMatrix = function (grid) {
  let Q = [[0, 0, 1]];//!means[row,col,count]
  let l = grid.length;
  if (grid[0][0] === 1) return -1;
  
  while (Q.length) {
    let cur = Q.shift();
    if (cur[0]===l-1&&cur[1]===l-1) return cur[2];//!!reach the final corrodinate(x,y)and return the count;
    for (let x = -1; x < 2; x++) {
      for (let y = -1; y < 2; y++) {
        let cur2 = [cur[0] + x, cur[1] + y, cur[2]+1];//!!set cur2 as next position, 
        if (cur2[0] < 0 ||cur2[0] >= l || cur2[1] < 0 ||cur2[1] >= l || grid[cur2[0]][cur2[1]] === 1 ) continue;//!if out of bound or [x][y]===1(due to given or longer path)
        grid[cur2[0]][cur2[1]] = 1;//! set visited path to 1 so the closer position doesnt get visited again, this way longer path is eliminated! path is spreading out in shortest path
        Q.push(cur2);
      }
    }
  }
  return -1;
  };

//topological sort/vertics
//a->b->c, put a in q bc it has no source. pop a, ajdust b source to zero, then put b to q
//207. Course Schedule
var canFinish = function(n, pre) {
  let count=0;
  let q = [];
  let M={};//to map to track child node of a node;
  let m = Array(n).fill(0);//! track sources
  for (let [b, a] of pre) {//!loop given graph to map
    if (M[a]) M[a].push(b)
    else M[a]=[b]
    m[b]++;//!meaning b has one more source
  }
  for (let i = 0; i < m.length; i++)if (m[i] === 0) q.push(i);//!loop map to find point w/ no source
  while (q.length) {
      let a = q.pop();
      if (M[a]){ //!M[a]is to check if it has downward path
        for (let b of M[a]){m[b]--;if(m[b] === 0) q.push(b);}}//!find next point,source -1, and put into q when no source
      count++;//! count ++ when top node found, no point is counted twice bc point only put in q when source is 0
    }
    return n === count//!count will be less if there is loop => vertice was never put in q
  };
console.log(canFinish(3, prerequisites = 3, [[1,0],[1,2],[0,1]]));

//210. Course Schedule II, return course taking order. ep. [[1,0],[2,0],[3,1],[3,2]] return [0,2,1,3] taking 0, then 2,1,3
var findOrder = function(n, pre) {
  let ans=[]
  let q = [];
  let M={}
  let m = Array(n).fill(0);
   for (let [b, a] of pre) {
      if (M[a]) M[a].push(b)
     else M[a]=[b]
      m[b]++;
    }
  for (let i = 0; i < m.length; i++)if (m[i] === 0) q.push(i);
   while (q.length) {
      let a = q.pop();
      if (M[a]) for (let b of M[a]){m[b]--;if(m[b] === 0) q.push(b);}
      ans.push(a)
    }
    return ans.length===n?ans:[]//!!return empty[]if no possible
  };

  //743. Network Delay Time
var networkDelayTime = function(times, N, K) {
  const M= {};
      times.forEach(x => {
      let [u,v,w] =x
          if (!M[u])   M[u] = {};
         M[u][v] = w;
      });
  let timeFromK = new Array(N + 1).fill(Infinity); 
  timeFromK[0]=0;
  let shortestPathPrevNode = new Array(N + 1).fill(null); // array [0, 1-N] indicating we got to index from value
  let visited = []; // which nodes have already been visited
  let unvisited = new Array(N).fill(false).map((value, index) => { return index + 1}); // which nodes have yet to be visited
  timeFromK[K] = 0;
  djikstras(M, visited, unvisited, timeFromK, shortestPathPrevNode);  
      
  let max=timeFromK.reduce((x,y)=>Math.max(x,y))
      return max === Infinity ? -1 : max;
  };
  
  var djikstras = function(graph, visited, unvisited, weightFromStart, prevNode) {
    if (!unvisited.length) 	return;
  
    let current; // current will be the node with lowest weight from starting point
    let min = Infinity;
    unvisited.forEach((candidate) => {
      if (weightFromStart[candidate] < min) {
        min = weightFromStart[candidate];
        current = candidate;
      }
    });	
    // Step 2 : set current as visited
    visited.push(current);
    unvisited.splice(unvisited.indexOf(current), 1);
    // Step 3: if graph indicates current has neighbours, update their weights
    const neighbours = graph[current];
    if (neighbours) {
      const unvisitedNeighbours = Object.keys(neighbours).filter((unvisitedNeighbour) => {
        /* 
                  we know we reached a visited node via the shortest path because we always
                  start from the minimum cost... therefore, we don't need to try and compute
                  the path from current -> visited because we can never get a shorter path
                  to visited from current
              */
        return unvisited.indexOf(Number.parseInt(unvisitedNeighbour)) > -1;
      }).forEach((unvisitedNeighbour) => {
              /*
                  we calculate the cost of the path to the unvisited neighbour from current node via:
                      edge from current->UVN + weightFromStart[current]
                  
                  if we had not calculated a cost for the unvisited neighbour before, OR
                  if the previous path (guaranteed to be minimum so far) is more expensive, THEN:
                      update weightFromStart and set the current node as the "previous node visited for the minimum weightFromStart"
              */
        const timeFromCurrent = neighbours[unvisitedNeighbour] + weightFromStart[current];
        if (weightFromStart[unvisitedNeighbour] === Infinity || timeFromCurrent < weightFromStart[unvisitedNeighbour]) {
          weightFromStart[unvisitedNeighbour] = timeFromCurrent;
          prevNode[unvisitedNeighbour] = current;
        }
      });
    }
    // step 4: run Djikstra's again once... the termination condition is unvisited.length
    djikstras(graph, visited, unvisited, weightFromStart, prevNode);
  }


//547. Number of Provinces
var findCircleNum = function(M) {
  let u=new UnionFind(M.length)
  for(let r=0;r<M.length;r++){
    for(let c=r;c<M[0].length;c++){
      if(r!==c&&M[r][c]===1)u.union(r,c)
    }
  }
  return u.groups
  };
var findCircleNum = function(M) {
  // initialize union-find array, with each person in a different group
  var uf = M.map((x,i)=>i); // [0, 1, 2, 3...]

  for (var r = 0; r < M.length; r++) {
    for (var c = r; c < M.length; c++) { // upon encountering a pair of friends
      if (M[r][c] === 1) {  
        let rhead = uf[r]; // find: head of friend r's group  
        while (uf[rhead] !== rhead) rhead = uf[rhead]; // find: head of friend c's group
        let  chead= uf[c];
        while (uf[chead] !== chead) h = uf[chead];
        uf[chead] = uf[rhead];        // union: point head of friend r's group to friend c's group
      }
    }
  }
  // return the count of group heads, where u[k] = k
  return uf.filter((v, i) => i === v).length;//only v matches i when new group created
};

var findCircleNum = function (isConnected) {
  const n = isConnected.length;
  let parent=[];
  for(let x =0;x<n;x++)parent[x]=x;
  const rank = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
      for (let j = 0; j < i; j++) {
          if (isConnected[i][j] === 1) {
              union(i, j);
          }
      }
  }
  return parent.filter((val, index) => val === index).length;

  function union(p, q) {
      const rootP = find(p);
      const rootQ = find(q);
      if (rootP === rootQ) {
          return;
      }
      if (rank[rootP] > rank[rootQ]) {
          parent[rootQ] = rootP;
      } else if (rank[rootP] < rank[rootQ]) {
          parent[rootP] = rootQ;
      } else {
          parent[rootQ] = rootP;
          rank[rootP] += 1;
      }
  }

  function find(p) {
      while (parent[p] !== p) {
          parent[p] = parent[parent[p]];
          p = parent[p];
      }
      return p;
  }
};
DFS:

var findCircleNum3 = function(M) {
  const seen = new Set();
  let res = 0;
  const dfs = (i) => {
      for(let j = 0; j < M[0].length; j++) {
          if(M[i][j] === 1 && !seen.has(j)) {
              seen.add(j);
              dfs(j);
          }
      }
  }
  for(let i = 0; i < M.length; i++) {
      if(!seen.has(i)) {
          dfs(i);
          res++;
      }
  }

  return res;
};
BFS:

var findCircleNum4 = function(M) {
  const seen = new Set();
  let res = 0;
  let stack = [];
  for(let i = 0; i < M.length; i++) {
      if(!seen.has(i)) {
          stack.push(i);
          while(stack.length) {
              const curr = stack.pop();
              seen.add(curr);
              for(let j = 0; j < M[0].length; j++) {
                  if(M[curr][j] === 1 && !seen.has(j)) {
                      stack.push(j);
                  }
              }
          }
          res++;
      }
  }
  return res;
};
console.log(findCircleNum2(
  [[1,1,0],[1,1,0],[0,0,1]]));


//1319. Number of Operations to Make Network Connected
class UnionFind {
  constructor(n) {
      this.root = Array(n).fill().map((v, i)=>i);//! only for index unions
      this.groups = n;
  }
  find(x) {
      if(x == this.root[x]) return x;//!base case(root[x]===index)
      return this.root[x]=this.find(this.root[x]);//!path compression! so it connects directly to root!
  }
  union(x, y) {
      const rootX = this.find(x);
      const rootY = this.find(y);
      if(rootX != rootY) {
          this.root[rootY] = rootX;
          this.groups--;//!when connection is made, groups are one less
      }
  }
}
var makeConnected = function(n, connections) {
  if(connections.length < n-1) return -1;//!impossible if link is less than n-1
  const u = new UnionFind(n);
  for(let [a, b] of connections) {
      u.union(a, b);
  }
  return u.groups - 1;//!group-1 is the link needed! ep.2 groups need one link
};
//721. Accounts Merge
class UnionFind {
  constructor() {
    this.parent = {}//! needed for non index unions
  }
  find(x) {
    if (!this.parent[x]) return x;//! base case, create first root!
    return this.parent[x]=this.find(this.parent[x])//!path compression! so it connects directly to root and return x!
  }
  union(p, q) {
    const root1 = this.find(p);
    const root2 = this.find(q);
    if (root1 !== root2) {
      if(root1>root2) this.parent[root1]= root2
      else  this.parent[root2]= root1;
    }
  }
}
var accountsMerge = function(accounts) {
  const uf = new UnionFind();
  const map = {}

  for (const account of accounts) {//! map all emal:name
      for (let i = 1; i < account.length; ++i) {
          map[account[i]] = account[0];
          if (i < account.length - 1) {//! apply union til second last(only the email part bc i starts with 1)
              uf.union(account[i], account[i + 1]);
          }
      }
  }

  const sets = {}; //! group all connected email together
  for (const email in map) {
      const root = uf.find(email);
      if (!sets[root])  sets[root] = [];
      sets[root].push(email);
  }
  const res = [];
  for (const root in sets) {
      sets[root].sort((a,b)=>{return a<b?-1:1});//!sort email part lexicographically
      res.push([map[root], ...sets[root]]);
  }
  return res;
};

//841. Keys and Rooms
var canVisitAllRooms = function(rooms) {
  let m=Array(rooms.length).fill(true)
  let count=0;
  let q=[0];
  while(q.length){
    let r=q.pop();
    if(m[r]){
      rooms[r].map((x)=>q.push(x))
      m[r]=false;
      count++
  }}
  return count===rooms.length;
};

