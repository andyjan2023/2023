//res.filter(y=>{return y!==i})}//arrow function with bracket need to return!!!!
//forEAch cant return true or false!!!!!

//<< reverse a str
const reverse=(str)=>{ 
const rev= str.split('').reverse().join('');//turn string into array// turn array back to string
 console.log(rev);
} 
function reverse2(str) {
  let rev='';
  for(let x of str){rev= x+rev;}//use for of to avoid syndex mistake(instead of (let.x>0 ...))
}
reverse2('asdf')//dont confuse variable with str!!!!!

function reverse3(str) {
  let rev='';
  for(let x=str.length; x>0;x--){rev=rev+str[x-1]}}
function reverse4(str){
  let rev= str.split('').reduce((x,y)=>y+x);//split() two kinds'' or ' ' //reduce()
  console.log(rev);
}
//<<Palindromes
function Palin(str){
  let rev=str.split('').reduce((x,y)=>y+x);
 console.log(rev===str)//to return true/
}
function Palin(str){console.log(str.split('',str.length / 2).every((x,i)=>x===str[str.length-i-1]))//every() to compare
}
//<<reverse a number
function revN(num){
  let x=num.toString().split('').reduce((x,y)=>y+x);//make sure toString() has ()//parseint
  console.log(parseInt(x)*Math.sign(num))
}
//>>find max character a string
const maxc=(str)=>{
  let char={}; for ( x of str){!str[x]? char[x]=1: char[x]++}; console.log(char);
}
const maxc2=(str)=>{
  let char={}; let max=0; let maxChar=''; 
  for( x of str){char[x]=char[x]+1||1};//logical operator ||(return right if left is falsy)
  for(y in char){if (char[y]>max){max=char[y];maxChar=y}} console.log(maxChar); //for in
}
//>>FizzBuzz
const Fizz=(num)=>{
  for(let x=1;x<=num;x++){console.log(x%15===0? 'fizbuz' :x%3===0? 'fiz':x%5===0? 'buzz': x )}// x>=y  is allowed. dont confuse x with num!!!!!
}
//>array chunking
const acarray=[2,3,4,3,2,3,2,3];
const ac=(array,size)=>{
  let chunked=[]; for(x of array){let last=chunked[chunked.length-1];
    if(!last||last.length===size){chunked.push([x])}else{last.push(x)} } console.log(chunked)//make sure []and x are pushed together
}
const ac2=(array,size)=>{//slice(x,y)starting index x up to index y, not including y
  let chunked=[];let index=0; while(index<array.length){chunked.push(array.slice(index,index+size));index+=size};console.log(chunked);
}
//>anagrams  .replace(/[^\w]/gi,'')/g regex(regular expression)[^]not include,\w all number and letters,g finds all not just firstr one, i upper and lowe case
const ana=(str1,str2)=>{//use helper function for repeating actions// Object.keys(x)
  const charMap=(str)=>{
  const mm={};for (x of str.replace(/[^\w]/g,'').toLowerCase()){mm[x]=mm[x]+1||1} return mm}
  console.log(charMap(str1));
 if( Object.keys(charMap(str1)).length !== Object.keys(charMap(str2)).length) {return(false)} 
  for(let x in charMap(str1)){if(charMap(str1)[x]!==charMap(str2)[x]) {return(false)}}return(true);
}
const ana2=(str1,str2)=>{
  const cleanstr=(str)=>{return str.replace(/[^\w]/g,'').toLowerCase().split('').sort().join('')};//dont forget to return!!!!!//sort()
  return cleanstr(str1)===cleanstr(str2)// no need for ternary operator
}
//>capitalize first char in a sentense
const cap=(str)=>{
  const word=[]; for(let x of str.split(' ')){word.push(x[0].toUpperCase()+x.slice(1))}; console.log(word.join(' '));
}
const cap2=(str)=>{//string is used for of or (

  let word=''
  for(let i=0;i<str.length;i++){if(str[i-1]===' '||i===0){word+=str[i].toUpperCase()}else{word+=str[i]}} ;//cant use for of
}
cap2('asdf asdf')
//>step question
const step=(num)=>{
  for(let i=1;i<num+1;i++){console.log(`'${'#'.repeat(i)+' '.repeat(num-i)}'`)}// make sure < is correct direction when using loop
}
const step2=(num)=>{
  for(let r=0;r<num;r++){let stair='';
    for(let c=0;c<num;c++){ 
      ; if (c<=r){stair+='#'}else{stair+='-'};//create string '' and += to add
    }
  }
}
const step3=(num, stair='',r=0)=>{
  if(r===num){return}
  if(stair.length===num){
    console.log(stair); return step(num,r+=1);
  }
  if(stair.length<=r){stair+='#'}else{stair+='-'}
  step3(num, stair, r);
}
function printNumber(n, dec=1){// give reasonable default
  if(n===0){return;}; //1 state base case first to stop recursion
  console.log(n);// run current function
  printNumber(n-dec);//run function again, but change argument must change
}
const param=(x)=>
{let row=''
  for(let r=0;r<x;r++){
  for(let c=0;c<x*2-1;c++){
if(x-1-r<=c&&c<=x-1+r){//dont forget <= not just <
  row+='#'}else (row+='-')}
console.log(row);row=''
}}
const pyram2=(num, row=0, level='')=>{if (row===num) {return;}
if(level.length===2*num-1){console.log(level); return pyram2(num, row+1)}
const mid=Math.floor((2*num-1)/2);
let add;
if (mid-row<=level.length&&mid+row>=level.length){add='#'}else{add=' '} pyram2(num,row,level+add)
}

//>> find vowels
const vowel=(str)=>{//includes()// use []for filter can use substring 'asdf'
  let count=0; const check=['a','e','i','o','u']; for (let x of str.toLowerCase()){if (check.includes(x)){count++;}} console.log(count);
}
const vowel2=(str)=>{//match
  const match= str.match(/[aeiou]/gi); console.log( match?match.length:"none")
}


//>queue  array//unshift,push,shift,pop, splice, slice  //stack//
//>>link list
class Node{
  constructor(data,next=null){//next dafault value is null
    this.data=data;
    this.next=next;
  }
}
class linkedlist{
  constructor(){
    this.head=null;
  }
  insertFirst(data){
this.head=new Node(data, this.head);  //passing in existing node as 2nd arguement of constructor(this.next), then assign this.head to new node
  }
  size(){let n=this.head;let count=0;while(n){count++;n=n.next}return count}
  getlast(){let n=this.head; while(n&&n.next){n=n.next} return n}
  removefirst(){if(this.head){this.head=this.head.next}}
  removelast(){if(!this.head){return}if(!this.head.next){this.head=null;return}
    let prev=this.head; let n=this.head.next;while(n.next){prev=n;n=n.next}prev.next=null
  }
  insertlast(x){if(!this.head){this.head=new Node(x); return}let n=this.head;while(n.next){n=n.next}n.next=new Node(x)}
  indexvalue(x){let n=this.head;let count=0 ;while(count<x&&n){n=n.next;count++}if(n)return n}
 
  indexremove(x){let count=1;let prev=this.head; if(x===0){this.head=prev.next ;return}
  while(count<x&&prev.next){prev=prev.next;count++}if(prev.next){prev.next=prev.next.next}}
  indexinsert(x,i){if(!this.head){this.head=new Node(x) ;return}if(i===0){this.head=new Node(x,this.head);return}
  if(this.indexvalue(i)){const n=new Node(x,this.indexvalue(i));this.indexvalue(i-1).next=n}}//cant use if(x=0)!!!!!
  midpoint(){let mid=this.head;let full=this.head; 
    while(full.next&&full.next.next){mid=mid.next;full=full.next.next}return mid}//full.next stops 2nd condition!!!!!
  removelastt(){if(!this.head.next){this.head=null;return}//dont forget to return here!!!!!!!!!!!!!!!!!!!!!!!
    let n=this.head; while(n.next.next){n=n.next}n.next=null}
  verifyCircularLL(){let mid=this.head;let full=this.head; while(full.next&&full.next.next){mid=mid.next;full=full.next.next;
    if(mid===full){return true}} return false}//daul pointer setup
  fromlast(n){let mid=this.head;let full=this.head; for(let x=0;x<n; x++){full=full.next} while(full.next){mid=mid.next;full=full.next} return mid}
}
const list=new linkedlist();
list.insertFirst('a')
list.insertFirst('b')
list.insertFirst('c')

//>>tree/ breadth first traversal/depth first t
class Nodet{
  constructor(data){
    this.data=data;
    this.children=[];
  }
  add(data){//adding children
    this.children.push(new Nodet(data));
  }//.find() will look and stop after the first match, whereas, .filter() will continue searching through the entire array
 remove(data){this.children=this.children.filter(node=>{return node.data!==data})}//filter does not alter objects
 
}
class Tree{
  constructor(){
    this.root=null;
  }// in const x=y.shift(), y lost first item, x is the first time!!!!!
  traBF(fn){const arr=[this.root];while(arr.length){const node=arr.shift();arr.push(...node.children);fn(node)}};
  traDF(fn){const arr=[this.root]; while(arr.length){const n=arr.shift();arr.unshift(...n.children);fn(n)}}
  //...n.children!!!! not ...n// create []and add this.root at the same time!!!!! not arr=this.root

}////use push(...x)to add array at the same level. or use for loop to iterate

const tree=new Tree
const nodet=new Nodet(2)
nodet.add(1);nodet.add(3);nodet.add(5)
nodet.children[0].add(4);nodet.children[2].add(3);
tree.root=nodet
tree.traDF(x=>x.data+=0)// not (x=>x+10)!!!!!! not (x=>x.data+10)!!!!!!
//console.log(tree);
const levelwidtharray=(node)=>{let arr=[node,'s'];let counter=[0];/// use arr[arr.length-1]++ to add the end of array
  while(arr.length&&arr[1]){// or arr.length>1
  const n=arr.shift(); if(n==='s'){counter.push(0);arr.push('s')}
  else{arr.push(...n.children);counter[counter.length-1]++};} return counter
}
const levelwidth2=(n)=>{
  let parent=[n];let child=[];let result=[1]
  while(parent.length){
    parent.forEach(x=>{child.push(...x.children)})// use forEach for [...a,...b,...c]
    if(child.length){result.push(child.length)}
    parent=child;
    child=[]}return result
}

//>> binary search tree
class NodeBST{
  constructor(x){
    this.data=x;
    this.left=null;
    this.right=null
  }
  insert(x){const n=new NodeBST(x) 
    if(x<this.data){this.left?this.left.insert(x):this.left=n}
    else{this.right?this.right.insert(x):this.right=n}
  }
  search(x){if(this.data===x){return this;}
  if(this.data<x&&this.right){return this.right.search(x)}
  else if (this.data>x&&this.left){return this.left.search(x)}return false;
  }
}
const nodebst= new NodeBST(3)
nodebst.insert(4)
nodebst.insert(1)
nodebst.insert(8)
nodebst.insert(9)
nodebst.insert(0)

//console.log(nodebst.search(7));

//>>bubbleSort

const bsort=(x)=>{
  for(let y=x.length+1;y>1;y--){//or use for(let y=0;y<x.length;y++)and(let i=0;i<x.length-y;i++)
  for(let i=0;i<y;i++){if(x[i]>x[i+1]){let prev=x[i];x[i]=x[i+1];x[i+1]=prev}}}
}
let arrsort=[2,32,12,34,3,6,91,5]
bsort(arrsort)
//selectionSort
const ssort=(x)=>{
  for(let i=0;i<x.length;i++){indexmin=i;
    for(let y=i+1;y<x.length;y++){if(x[i]>x[y]){indexmin=y}}
    if(indexmin!==i){let min=x[indexmin];x[i]=x[indexmin];x[i]=min}
  }
 
}
ssort(arrsort)

function count (string) {  
  let result={}
for(let x=0;x<string.length;x++){!result[string[x]]?result[string[x]]=1:result[string[x]]++}

   return result;
}


//>> find unmatched
const faaa=[1,2,3,4,5,0]
const fbbb=[2,3,4,5]
//console.log(faaa.filter(x=>!fbbb.includes(x)));//for find(x=>b.inclues(x))for first item
//console.log('abc'.charCodeAt(0));//for 

function moveZeros(arr) {
  let count=[];
  for(x of arr){if(x===0)count.push(0)}

let result=arr.filter(x=>x!==0)
result.push(...count)
}

moveZeros([false,1,0,1,2,0,1,3,"a"])
faaa.push('dd')
const aa= faaa.concat('jj')


function getCount(str) {
let v='aeiou'
let count=0;
for(let x=0;x<str.length;x++){if(v.includes(str[x]))count++}
return count
}

const sameCase= (x,y)=> {
let str=x+y;
const first= str.replace(/[^A-Za-z]/g,''); 
console.log(first);
if(str!==first){return -1}
const second=first.replace(/[^A-Z]/g,'')
return(second.length===1? 0:1)
}


function pigIt(str){
  let result=''
for(let x=0;x<str.length;x++){
  if(!str[x-1]||str[x-1]===' '){first=str[x]; if(str[x-1]===' '){result+=' '}}
  else if(str[x]!==' '){result+=str[x]}else{result+=(first+'ay')}if(!str[x+1]&&str[x-1]!==' '){result+=(first+'ay')}
}
return result
}

function findUniq(n) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));//x.indexof/lastinexof(y) output index of first/ last y in x
}
const nfinquniq=[1,2,2,2,22]
function findUniq(arr) {
  arr.sort((a,b)=>a-b);// sort((a,b=>a-b))
  return arr[0]==arr[1]?arr.pop():arr[0]
}
function wave(str){
let result=[];
for(let x=0;x< str.length;x++){if(str[x]!==' '){
  let s=str.split(''); s[x]=s[x].toUpperCase();result.push(s.join(''))
}}
return result
}



//objects
//Object.keys()/Object.values()

//Strings/regex
//x.search(y)find first index in x,or(-1),y can be any character //~same as indexOf(x)
//match(str/reg)(return in array)eg.match(/[si]/g   
//replace('a','b') replace a with b
//[^a-z]gi/  ^not include/g all,not just first/i upper and lower/a-z /\w any charactoer and 0-9/ \W inverse of /w /[] everything in bracket

//no mutate 
// concat/ /y.indexOf(x) or (-1), check if x is a substring!!!!/startsWith(x)=>t/f/lastindexOf(x)  /split()join()   /x.toString()/parseInt()/x.toUppercase()///x.toLowerCase()/''
//(str).repeat(x)repeat str x times//.flat().flatMap()//~(str).charCodeat(i in str)not in in Array!! 
//reduce(a,b=>a-b, initial val(a is ignored if null is itial val(simliar to map)))a is accumator,fucntion =a/reduceright /slice(start(0 to -1),end(N))///y.include(x) y is array or str,return t/f if x in y
//foreach(callback)map(callback)/ find(callback 1st)return value//~findindex(Callback 1st) same as indexOf()but has to be a statement!!
//filter(x=>boolean)(same as indexof but with callback use!== for not deleting matches)use ==== not=   !!!!! 
//every(callback 1st F or all true)//some(callback 1st T or all false)

//mutate
//fill(x,start,end(n))#Same/unshift()#Arr.length/push#arr.length/shift()#deleted/pop#deleted/reverse()#Same
//splice(start,deletecount,item1,item2,itemN)#deleted/sort(callback)#Same
//use reverted = [...numbers].reverse() to prevent mutation on numbers!!!
//uu.map((x,i)=>{if(x<10)return uu[i]+=10;})mutate with map!!

//Object.keys(x)/Object.values(x)/ delete x.key
//Math.max.apply(null, arr); or Math.max(...arr)

//new Map
//x=new Map([a,b])/x.set(a,b)/x.get(a)/ x.has(a)/ x.delete(a)/x.clear()/x.size;
//for(let [a,b] of x){}/x.forEach(value,key=>{})value first! only foreach no map!!
//Array.from(x.keys());Array.from(x.value());Array.from(x.entries())
//new set
//s=new Set([,,]) /  s.add(a)        /s.has(a)/s.delelte(a)/ clear()/  s.size;/ x.forEAch(x=>x)/for(let i of x){}
//[...s] tranfrom set into array///[...new Set(arr)] remove all repeat in array

//to Boolean/  Boolean(x) or !!(x)
//to string/ ''+x,x+'',String(x),x.toString(),`${x}`,`${x || ''}`
//to number/ +x,Number(),parseInt(),*1, reduce((a,b)=>+a+ +b), >> 0 get rid of fraction

//~isFinite(x) to check number,Number.MAX_SAFE_INTEGER,null,0 or number is true; Infinity,str,obj is false;
//generate random Math.floor(min+(max-min)*Math.random()); <--dont forget random is a func.
//Number.MAX_SAFE_INTEGER largest number max Number.min_SAFE_INTEGER!!! Infinity for short if need not precise,Number.MAX_SAFE_INTEGER
//exponential ** Math.pow(2,3)= 2**3//means 2^3//Math.sign(-x) return -1
//Math.min(x,y) mininum/max/ Math.floor(x) or ~~x or x>>0
//x++ is a statement, not number!!
//n % 1 === 0 check interger
//x++ is a statment, not a number

//x=(x||0)+1;
//fastPointer = fastPointer.next?.next;
//Objec.apply({},ojbet 2);
 // while (head) { if (nodes.has(head)) return true; nodes.add(head);
 //const array99 = ['a', 'b', 'c'];let hash = {};array99.forEach((x, y)=>{hash[x] = y});
 //let uu=3;console.log(2+uu++);
// (map.get(id) || 0) + 1
//a < b && (a = 1) && (b = 0) && (c = 3); a,b,c should excuse if a<b, but c wont bc b=0 is false
//(||) return first true(??)the same but 0 means true, or false is either, (&&) return last true only when both true
//take parenthesis to prevent operator precedence of && over ||
//const {name, age}=person; destructruing 
//const person2={...person, name:'jack'}
//use aa.slice() to copy array .push[...aa]

//const x = () => {} // Does nothing
//const y = () => ({}) // returns an object
//onst y = () => ( ) // returns an object
//onst y = () => {return  } // returns an object
//onst y = () => {return{}  } // returns an object
//axx.sort((a,b)=>a[0]-b[0]) sort sub arry inside array
//let [,xxx,xx3]=axx2 quickly skip first index and name second index
//let x=1,y=2
//array.at(-1) for last index
//(M[x]||0)+1}  m[x]=~~M[x]+1 //!not m[x]=~~+1
//jj=[kk,kk=jj][0] ; [jj,kk]=[kk,jj]!!! make sure ";" is used /to swap or //list[x] = [list[y],list[y]=list[x]][0]//[arr[0], arr[1]] = [arr[1], arr[0]];
//Object.entries(M).map(([a,b])=>{buc[b]=new Array(0);buc[b].push(a)}); foreach or map doesnt change f//https://stackoverflow.com/questions/59787653/array-push-not-working-within-for-loop-within-foreach-loop-javascript
//copy array/Object.assign([],x) works even x is null

//let h2=heights.map(x=>x.map(i=>i)) copy array w/o reference
//let ff= false? 1:3 // same as let ffi=(false&&1||3)

//let uuu=0,ttt=6,xxx=null
//console.log(uuu?.toString()??"n/a");nullish coelation and optional chaining
//digits[ind] doesnt need to convert toString
//always ;after () at the end
//if(M[cur[j]])continue;// M[cur[j]]=true; use hashM to spurn tree
//  [...arr.keys()] or Object.keys(arr)
//array.map().reverse()

//use  if(x==null) to cover x any non zero!!!! not x===null
//no ; after {}!!!!
//string.sort((a,b)=>a.charCodeAt()-b.charCodeAt() )same as string. sort()
//'a'.localeCompare( 'b', locales, option)//items.sort((a, b) => a.localeCompare(b, 'fr', { ignorePunctuation: true }))
//sort((a,b)=>{ let x1=a;let x2=b; if(x1===x2)return x1<x2?-1:1 return a<b?1:-1})two step sorting
//sort((a,b)=>{return a<b?-1:1}); sort lexicologially
//only let m=Array(target+1).fill().map(()=>[]) is needed//  or= [...Array(N1+1)].map(r => Array(N2+1).fill(false));
//when function return x=2; 2 is displayed
//if(x of array) if(x in object)/ for(let x of array) for(let x in ojbect)/ x in array means x is index!!!
// let seg=dfs(i,left-candidates[i]); segment.push(...seg.map(s=>[candidates[i],...s]))
//var res = arr.reduceRight((arr, last, index)=> {return (arr = arr.concat(last))}, []);
//let res = arr.reduceRight((a,b)=> a.concat(b),[]); a is accumator, a is [] bc initator is included
//~uu.reduceRight((a,b,i)=>{if(b==="c") return uu[i]=b+'cc';else return uu[i]=b+'xx'},null)!!igonre a, add null, condition for b
//destructuring assignment function uuu(){return [1,3]}let[a,b]=uuu(); means a=1,b=3
//  console.log('255'>255) is false, str and number can compare!!!
//a.filter(x=>!b.includes(x))) //~filter itemms in array a thats not part part array b
//!type of returns/ 1.if()return null, x.part=dfs() return x or return [...dfs(),...x,y] to build graph, make sure return dfs()to display or return global  
                //! 2/if()return t/f, x=dfs(),y=dfs(), return x||&& y or math(x,y) to bubble up, then return global or return dfs()
                //! 3/return to surface value from bottom,each node return current level, can use x=string+dfs()for m={}/return math(dfs()), then return global 
//class xx{ constructor(i){this.d=i} gg(x){ return this.d+x}   }
//let xx= function(i){ this.d=i;}; xx.prototype.gg=function(x){return this.d+x;}//!normal function with this. becomes constructor
// '\\' is \ in str interal
//x= x===1? 2:1 /toggle x value btw 1 and 2\
// arr.toString() to compare 
//let uu= Array(3).fill().map((v, i)=>i)//!fill()prevent skipping empty,map() prevent object reference
//[...Array(3)]same as  Array(3).fill()
//sort is 0(n.log(n))t:0(n)
//toggle assignment;Paint= Paint===1? 2:1  

function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)}

//>>determin valid parathasis
var isValidd = function(s) {
let left=[]
  let res={'(':")","{":'}','[':']'}
for( let x of s){
  if(x in res){left.push(x)}
  else if(res[left.pop()]!==x){return false}
  }
  return !left.length;
}


var search = function(nums, target) {

let head=0;
let tail=nums.length-1;

while(tail>=head){
  let mid=Math.floor((head+tail)/2)
if(nums[mid]===target){return mid}
else if(nums[mid]<target){head=mid+1}
else{tail=mid-1}

}
return -1
};

function isValidSubsequence(array, sequence) {
  for (let x of array){
  if (x===sequence[0]){
    sequence.shift();
  }}
  console.log(sequence);
    return !sequence.length
  
  }

//eric leetcode 6 phases/
//two pointer, silding window, binary search, fast/slow pointer
//Linklist (reverse,traverse), binary tree (dfs(preorder, inodrder, post order), BFS, iteratively,recursively ) BST, N-ary Tree/Trie
//sorting, intervals, top k element(priority gueue), two heaps(2 priority gueue ),merge sort(dnd), quick sort
//BFS, DFS(backtrading, recursion, union find)
//DP, distinct ways pattern(knapsack problem), dp distinct ways, dp subsequnce
//array, string, stack/queue,hash, design questions(cache)



var isValidBST = function(root) {

  return dfs(root, null, null);
      
      
  function dfs(n, min, max){
    if(!n)return true;
    if(min!==null&&n.val<= min){return false}  
     if(max!==null&&n.val >= max) {return false}
  return dfs(n.left,min,n.val)&& dfs(n.right,n.val,max)}// need to return function
  
  }
  var isValidBST = function(root,min=null,max=null) {

    if(!root)return true;
    if(min!==null&&root.val<= min){return false}  
     if(max!==null&&root.val >= max) {return false}
  return isValidBST(root.left,min,root.val)&& isValidBST(root.right,root.val,max)}

  let l1={"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}
  let l2={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val" :4,"next":null}}}}
  let l3={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":{"val":6,"next":null}}}}}}
  let l4={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val" :5,"next":null}}}}}
//         a
//    b        c
// d    e     f    g 
//h i  j     k l
//pre; abdhiejcfklg
//in;  hdibjeakflcg
//pos;  hidjebklfgca

class TreeNode{
  constructor(x){
    this.val=x;
    this.left=null;
    this.right=null
  }}
let rot={"val":5,"left":{"val":4,"left":{"val":11,"left":{"val":7,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null},"right":{"val":8,"left":{"val":13,"left":null,"right":null},"right":{"val":4,"left":{"val":5,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}}
let rot2={"val":5,"left":{"val":4,"left":{"val":11,"left":{"val":7,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":null},"right":{"val":8,"left":{"val":13,"left":null,"right":null},"right":{"val":4,"left":{"val":5,"left":null,"right":null},"right":{"val":1,"left":null,"right":null}}}}
let rot3=
{"val":5,"left":{"val":3,"left":{"val":2,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":6,"left":null,"right":{"val":7,"left":null,"right":null}}}

// var change = 0,quarters = 0;// understanding recusuian for function
// function howManyQuarters(howMuchMoney) {
//   if (howMuchMoney < 0.25) {
//     change = howMuchMoney;
//     return change;// base case to stop function
//   }
//   else {
//     quarters += 1;
//    howManyQuarters(howMuchMoney-0.25);
//     return quarters; 
//   }
// }
// change = 0.99;
// console.log ("Pay out " + howManyQuarters(change) + " quarters");



let ffib=(x)=>{//brute force T:o(2**n+m)->o(m*n),S:o(n+m)->same
  let m={};
 return  dfs(x);//!! need to return
  function dfs(n){
    if(n in m)return m[n];// return the same as the function return, same as **
    if(n<=2)return 1;
    return m[n]=dfs(n-1)+dfs(n-2);//**
  }
  }
//1.visualize the problem as tree,test with top down reucursion
//2.add memo and base case for memo value (key is variable, value is return value)then ,add m[]=value before each return
//3. return (dfs() or ans )

let ffib2=(n)=>{
let m= Array(n+1).fill(0);//m array is always target+1 to make sure index matches the target
 m[0]=0;
 m[1]=1;
for(let x=2;x<=n;x++){
   m[x]=m[x-1]+m[x-2];} 
return m[n];
}
// console.log(ffib2(20));
//1.visualize the problem as table
//2.usually array(target+1)to make index =target,initailize starting values at start keys
//3.iterate through the table

//canSum([5,3,4,7],7)->true
let canSum=(numbers,target,m={})=>{ //n,m height of dfs is m(imagine 1 is in nums), brute force is t:o(n**m)/s:o(m)->t:o(n*m)s:o(m)
if(target in m)return m[target]
if(target===0)return true;
if(target<0)return false;
  for (let n of numbers) { 
    if (canSum(numbers, target - n)) {m[target]=true; return true} //bubble up true
  }
m[target]=false;
return false;
} 

let canSum2=(numbers,target)=>{ ////o(mn)time,o(m)spce
let m=Array(target+1).fill(false)
m[0]=true;
for(let i=0;i<=target;i++){//dont use m.length bc m will get longer and longer!!!
  if(m[i]===true){
    for(let n of numbers) m[i+n]=true;
    }
}

return m[target]
} 



//https://www.youtube.com/watch?v=oBt53YbR9Kk&t=15398s&ab_channel=freeCodeCamp.org 1:36:02
//t:o(n**m *m)s:o(m)->t:0(n*m*m)s:o(m*m) /n*m *m bc need to copy each [...m[target]] memoized object 
let howSum=(nums,target,m={})=>{//only one ans is generated bc one m=[target] is generated
  if(m[target])return m[target];
  if(target===0)return [];//when empty array should be passed to signal goal is reached
  if(target<0)return null;
  for(let n of nums){
 
    if(howSum(nums,target-n,m)!=null) return m[target]=[...howSum(nums,target-n,m),n];//careful! m[target]not m[target-n] 
  }
return m[target]=null;
}

let howSum2=(nums,target)=>{//o(m*n *m  )subarray can be m long, 0(m m)
  let m=Array(target+1).fill(null);
  m[0]=[];
  for(let i=0;i<=target;i++){
   
    if(m[i]!=null){
      for(n of nums)m[i+n]=m[i].concat(n)//or =[...m[i],n]
  }}
return m[target];
}
// console.log(howSum2([3,2],5));



let bestSum=(nums,target,m={})=>{//t and s are the same
  if(target in m)return m[target]
  let shortest=null;
if(target===0)return [];
if(target<0)return null;
for(let n of nums){
  if(bestSum(nums,target-n)!==null){
    
    if(shortest===null||[...bestSum(nums,target-n,m),n].length<shortest.length)shortest=[...bestSum(nums,target-n,m),n];
  }
  }
 
  return m[target]=shortest;
}

let bestSum2=(nums,target)=>{//o(m^n)time 0(m^2)spacex
let m=Array(target+1).fill(null);
m[0]=[];
for(let x=0;x<=target;x++){
if(m[x]!==null){
  for(n of nums){
        if(!m[x+n]||m[x+n].length>[...m[x],n].length)m[x+n]=[...m[x],n]}
}
}  
return m[target];
}
// console.log(bestSum2([2,3,5],10));

let canConstruct=(str,target,sum='')=>{
  
  if(sum===target)return true;
  if(sum.length>=target.length)return null;
  for(st of str){

if(canConstruct(str,target,sum+st)===true)return true;
  }
return false;
}

let canConstruct2=(str,target)=>{//o(m^2 n)o(m)
  let m=Array(target.length+1).fill(false);//target.length+1 m[0]as activation
   m[0]=true;
 for(let x=0;x<=target.length;x++){
if(m[x]){
  for(st of str){
    if(target.slice(x).indexOf(st)===0) m[x+st.length]=true;
  }
}

 }
 console.log(m);
  return m[target.length]
}
// console.log(canConstruct2(['purp','p','ur','le','purpl'],'purple'));
// console.log(conConstruct(['ab','abc','cd','def','abcd'],'abcdef'));


let countConstruct=(str,target,m={})=>{
  if(m[target])return m[target];
  if(target==='')return 1;
  let count=0;
  for(let st of str){
    if(target.indexOf(st)===0){
      count+=countConstruct(str,target.slice(st.length),m);
    }
  }
  return m[target]=count;

}

let countConstruct2=(str,target)=>{
  let m=Array(target.length+1).fill(null);
  m[0]=1;
  for(let i=0;i<=target.length;i++){
    if(m[i]!==null){          
      for(let st of str)
      if(target.slice(i).indexOf(st)===0)m[i+st.length]+=m[i];//!!!start with 1 then plus!!
    }
  }
  console.log(m);
return m[target.length]
}

// console.log(countConstruct2(['purp','p','ur','le','purpl'],'purple'));


 

//contrction word in any order, can repeat;
//allConstruct('hello',['cat','dog','mouse'])return []; //outer array means all combo, inner is the single combo in 
//allConstruct('',['cat','dog','mouse']) return [[]];//no way generate array
//t:o(n^m)combos,s:o(m) ->
 let allConstruct=(str,target,m={})=>{
  if(m[target])return m[target]
  if(target==='')return [[]];//[[]]are used bc map() are used after to loop through all the options
  let segment=[];
  for(let st of str){
    if(target.indexOf(st)===0){
      let seg=allConstruct(str,target.slice(st.length),m);//join all combination into one array/ from    
      segment.push(...seg.map(s=>[st,...s]))//add st at the front to each ways /[x],[y] => [st+x,st+y]
    }
  }
  return m[target]=segment;
 }
//  console.log( allConstruct(['purp','p','ur','le','purpl'],'purple'));

 let allConstruct1=(str,target)=>{//o(n^m)&o(n^m)
let m=Array(target.length+1).fill().map(()=>[]);
m[0]=[[]];//
for(let i=0;i<=target.length;i++){
  for(let st of str){
    if(target.slice(i,i+st.length)===st){
          m[i+st.length].push(...m[i].map((x)=>[...x,st]));

    }
  }
}
return m[target.length]
 }

 let l6={"val":1,"next":{"val":2,"next":{"val":3,"next":null}}}
 let l7={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val" :4,"next":null}}}}
 let l9={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val":5,"next":{"val":6,"next":null}}}}}}
 let l8={"val":1,"next":{"val":2,"next":{"val":3,"next":{"val":4,"next":{"val" :5,"next":null}}}}}
     
let t1={"val":1,"left":null,"right":{"val":2,"left":{"val":3,"left":null,"right":null},"right":null}}
let t4={"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null,"next":null},"right":{"val":5,"left":null,"right":null,"next":null},"next":null},"right":{"val":3,"left":null,"right":{"val":7,"left":null,"right":null,"next":null},"next":null},"next":null};
let t6={"val":0,"left":{"val":0,"left":{"val":0,"left":null,"right":null},"right":null},"right":{"val":0,"left":null,"right":{"val":0,"left":null,"right":{"val":0,"left":null,"right":null}}}}

