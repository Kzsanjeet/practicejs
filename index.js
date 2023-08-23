// it has global scope
// var A= 5;
// it has limited scope 
// let a=5+6;
// remians same 
// const c= 59;

// var A=5;
// let a=5+6;
// console.log(a)
// let b= 6;
// b= b+10;
// alert(b);
// document.write("<br>"+"<p>This is the javascript</p>")
// let name = prompt("Enter the name:")
// let result=("My name is "+name)
// document.querySelector(".name").textContent=result

// let x=parseInt(prompt("Enter the number: "))
// let y=parseInt(prompt("Enter the second number: "))
// console.log(x+y)

function apple(a,b){
    return a+b;
}
var c= apple(5,6)
console.log(c)
var sum= function sum(e,f) {
    console.log(e+f);
}
sum(5,6)

let fruits = () => {
    console.log("hello world")
}
fruits()
// // anonymous function
// // this is anonymous
let d= function(x,y){
    console.log(b)
}
// (function(){
//     console.log("I am anynomous");
// })();

// array
// .map function

var numbers=[45,55,65];
var newarray= numbers.map(myfunction);
function myfunction(num){
    return num*10;
}
console.log(newarray);

// .filter function

var numbers=[35,55,65];
var newarray= numbers.filter(myfunction);
function myfunction(i){
    return i>40;
}
console.log(newarray);

// array reduce

var numbers=[175,50,25]
var val=numbers.reduce(myfunc);
function myfunc(total,num){
    return total-num;
}
console.log(val);

// ArrayForEach example
// const items=[1,29,47];
// const copy=[];
// items.forEach(function(item){
//     copy.push(item*item);
// })
// console.log(copy);

const items=[1,29,47];
var copy=0;
items.forEach(function(item){
    copy=(item*item);
})
console.log(copy);

// undefined
var a=[1,2,3];
 var total=a.forEach(function2)
 function function2(num){
    return num*2
 }
console.log(total);


function clicknow(){
    alert("Hello")
}

function clickme(){
    alert("Why did you press the key!!!")
}