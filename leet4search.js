//BFS, DFS(backtrading, recursion)

//200. Number of Islands
//130. Surrounded Regions
//212. Word Search II
//37. Sudoku Solver
//51. N-Queens

//****************************************************************************************************************** */
//200. Number of Islands
var numIslands = function(grid) {
  let count=0;
    for(let r=0;r<grid.length;r++){
      for(let c=0;c<grid[0].length;c++){
        if (grid[r][c]==='1'){dfs(r,c);count++}
      }
    }
    function dfs(row,col){
      if(row<0||row>=grid.length||col<0||col>=grid[0].length||grid[row][col]==='0')return;
      else{
        grid[row][col]='0';
        dfs(row-1,col)
        dfs(row+1,col)
        dfs(row,col-1)
        dfs(row,col+1)
      }
    }
    return count
};
//130. Surrounded Regions
var solve = function(board) {
  let rl=board.length;
  let cl=board[0].length;//saves lots of time
      for(let r=0;r<rl;r++){dfs(r,0);dfs(r,cl-1)}
        for(let c=0;c<cl;c++){dfs(0,c);dfs(rl-1,c)}
  
  function dfs(row,col){
  if(row<0||row>=rl||col<0||col>=cl||board[row][col]==='X'||board[row][col]==='OO')return;
   else {board[row][col]='OO';
   dfs(row-1,col);
   dfs(row+1,col);
   dfs(row,col-1)
   dfs(row,col+1)
   }
  }
  for(let r=0;r<rl;r++){
    for(let c=0;c<cl;c++){
  if(board[r][c]==='O'){board[r][c]='X'}
  if(board[r][c]==='OO'){board[r][c]='O'}
    }}
  return board
  }

//212. Word Search II
var findWords = function (board, words) {
  let trie = {};
  let ans = [];
  let m = {};
  for (w of words) {
    let n = trie;
    for (char of w) {
      if (!n[char]) n[char] = {};
      n = n[char];
    }
    n.end = true;
    n.word = w;
  }
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      dfs(x, y, trie);
    }
  }
  return ans;
  function dfs(x, y, n) {
    if (y < 0 ||y === board.length || x < 0 || x === board[0].length || board[y][x] === false) return;
    if (!n[board[y][x]]) return;
    if (n[board[y][x]].end === true) {
      if (!m[n[board[y][x]].word]) ans.push(n[board[y][x]].word);
      m[n[board[y][x]].word] = true; }
      console.log(board[y][x]);
    let temp = board[y][x];
    board[y][x] = false;
    dfs(x, y + 1, n[temp]);
    dfs(x, y - 1, n[temp]);
    dfs(x + 1, y, n[temp]);
    dfs(x - 1, y, n[temp]);
    board[y][x] = temp;
  }
};

//37. Sudoku Solver
let bor=[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
var solveSudoku = function(board) {
  if (!board || board.length == 0) return;
dfs(board);
return board;
  function dfs(board){
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] === ".") {
                for (let c = 1; c <= 9; c++) {
                    if (isValid(board, i, j, c.toString())) {//!c is the empty space
                        board[i][j] = c.toString();console.log(1);
                        if (dfs(board)) return true;//!tis is used to bubble up return true all the way to first call
                        board[i][j] = "." ;
                } }
                return false;//!all number used but stil not working
            }
        }
    }
  return true;//!all element filled out
  };
  function isValid (board, row, col, c)  {
      for (let i = 0; i < 9; i++)  if (board[i][col] == c||board[row][i] == c) return false;
      const x = ~~(row / 3) * 3;
      const y = ~~(col / 3) * 3;
      for (let i = 0; i < 3; i++)for(let j = 0; j < 3; j++) if(board[x + i][y + j] == c) return false;       
      return true;}
};


//51. N-Queens//input 4 return [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
var solveNQueens = function(n) {
  const ans = [];
  const cur = [];
  bfs( 0, cur);
  return ans;

  function bfs(row, cur) {
  if (cur.length === n)return ans.push(cur.map(c => '.'.repeat(c) + 'Q' + '.'.repeat(n - c - 1)));//!push when all row is finished
  for (let col = 0; col < n; col++) {//!assign col location at row 0, not a matrix
      if (isValid(col, row, cur)) {
          cur.push(col);
          bfs(row + 1, cur);
          cur.pop();
      }}
  }
  function isValid(col,row,cur) {
    for (let i = 0; i < row; i++) if (cur[i] === col) return false;//!check each row
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) if (cur[i] === j) return false;//!check up-left diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++)  if (cur[i] === j) return false;//!check up-right diagonal
    return true;
  }
};


