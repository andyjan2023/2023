


//Object.keys()
//Object.values()

//Strings ///
//!x.search(y) 
//!match()
//!replace('a','b')
//![^a-z]gi/  ^not include,g not just first,i upper and lower, a-z /w any symbols 
//!isFinite(x) check number , 0 or number->true, infinity or str or obj ->false

//concat
//y.indexOf(x) or (-1), check if x is a substring!!!!
//lastindexOf(x)  
//split()join()   
//x.toString()
//parseInt()
//toUppercase()/
//toLowerCase()/''
//x.repeat(n).
//charCodeat(index).
//flat().
//flatMap()
//!reduce(a,b=>a-b, i(option))a is accumator,fucntion =a/reduceright, i iniitlazer 
//slice(start(0 to -1),end(N))   
//foreach(callback)map(callback)
//!find(callback 1st)/
//!findindex(Callback 1st)
//!y.include(x) y is array,return t/f if x in y
//!filter(x=>boolean)(same as indexof but with callback use!== for not deleting matches)use ==== not=   !!!!! 
//!every(callback 1st F or all true)
//!some(callback 1st T or all false)

//fill(x,start,end(n))#Same
//unshift()#Arr.length/push#arr.length/shift()#deleted/pop#deleted/reverse()#Same
//splice(start,deletecount,x)#deleted
//sort(callback)#Same
//!reverse() to prevent mutation on numbers!!!


//Object.keys(x)
//Object.values(x)
// delete x.key
//apply(null, arr); 
//or Math.max(...arr)
//localCompare



//new Map
//!x=new Map([a,b](n))/ x.set(a,b)/ x.get(a)/ x.has(a)/ x.delete(a)/ x.clear()/ x.size===>  set,delete/clear,get/has/size
//!for(let [a,b] of x){}/x.forEach(value,key=>{})value first! only foreach no map!!
//!Array.from(x.keys());Array.from(x.value());Array.from(x.entries())
//new set
//!y=new Set([,,])/ x.add(a), has, delelte, clear, size/  x.forEAch(x=>x)/for(let i of x){},===>add,delete/clear,has/size

//![...y] tranfrom set into array/[...new Set(numbers)] remove all repeat in array

//to Boolean/  Boolean(x) or !!(x)
//!to string/ ''+x ,String(x),x.toString(),`${x}`,`${x || ''}` 
//to number/ +x,Number(),parseInt(),*1, reduce((a,b)=>+a+ +b) /~~()turn any non-number to zero 1*'2'1/"2"

//class xx{   constructor(i){this.d=i};     gg(x){ return this.d+x}   }
//let   xx= function(i){ this.d=i;};        xx.prototype.gg=function(x){return this.d+x;}//!normal function with this. becomes constructor
//class- vs prototype-based inheritance 
class xx{
  constructor(i){
    this.d=i;}
  gg(x){ return this.d+x}}//is a function
  
let xx2= function(i){
    this.d=i;}
xx.prototype.gg=function(x){//is a object
    return this.d+x; }



//Dom
let cur=0;
const reviews = [
  { id: 1, name: "susan smith", job: "web developer", img:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },{ id: 2,  name: "anna johnson",  job: "web designer", img:  "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:  "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.", }]
window.addEventListener('DOMContentLoaded',  ()=>{showPerson();})//!window.addEventListener
const showPerson=()=>{
  const x=reviews[curr];//! curr is index of review arr
  img.src=x.img;//! x.src  for img source url
  author.textContent=x.name;//!x.textContent for intertext
  job.textContent=x.job;
  info.textContent=x.text
}
ranmbut.addEventListener('click',()=>{//! 'click'/'DomContentLoaded
  curr=Math.floor(Math.random()*reviews.length)
    showPerson();
  })

let count=10;
let num=document.querySelector('#value')
let x=document.querySelectorAll('.but');
x.forEach((i)=>{ i.addEventListener('click', e=>{//!forEach & e=>{let y=e.target.classList used bc querySelectorAll
  let y=e.target.classList;
  if(y.contains('decrease')) count--;//!x.style.color
  if(count>0)num.style.color='green';
  value.textContent=count;})})

const colors=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','F'];
btn.addEventListener('click',()=>{
    let randomNumber='#';
    let getRandomNumber=()=>{return Math.floor(Math.random()*colors.length)}
 for(let i=0; i<6; i++){randomNumber+=colors[getRandomNumber()];
    }})
document.body.style.backgroundColor= randomNumber;//!document.body.style.backgroundColor

let todos= ['get car','wash','shop'];
todos.forEach((todoTitle)=>{
let element= document.createElement('div');
element.innerText=todo1; 
document.body.appendChild(element);});

if(links.classList.contains('show-links'))links.classList.remove('show-links');;//! to remove class
links.classList.toggle('show-links')//! toggle class on and off

//.open{ visibility: visible; z-index: 10;}
modalbtn.addEventListener('click',()=>{modal.classList.add('open')})
closebtn.addEventListener('click',()=>{modal.classList.remove('open')})

const savedTodos = JSON.parse(localStorage.getItem('todos'));
const saveTodos = () => localStorage.setItem('todos', JSON.stringify(todos));
let timee=new Date().getTime();

const element = document.createElement('div');//!or ('button')
element.innerText = i.title + ' ' + i.dueDate;
element.style='margin-left: 12px';
deleteButton.onclick = delet;//!not delet() because not clicked yet
deleteButton.id = i.id;
element.appendChild(deleteButton);//put button inside div
const List = document.getElementById('list'); List.appendChild(element);//! put div inside list

let remove = id => {cur = cur.filter(i=>i.id!=x)};//!x.filter doesnt change x, need x=x.filter!!

xbutton.onclick='x()' //!runs function in html eventlistnder
element.onclick=x;element.addEventListener('click', x);//! never run function in DOM eventListiener!!

function x(e){const updateButton = e.target
  const z = updateButton.dataset.todoId;//!add custum attribute, element.dataset.XX
  const textbox = document.getElementById('edit-title-' + z);
  const xxx = textbox.value;}//!get the input content

const textbox = document.createElement('input');
textbox.type = 'text';//!set input attribute type n id
textbox.id = 'edit-title-' + i.id;
element.appendChild(textbox);





