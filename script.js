function myFuc(){
    document.getElementById('styC').style.color='blue'
}
function myFuc1(){
    let x,y,z;
    x=10;
    y=10;
    z=x+y;
    document.getElementById('demo1').innerHTML ='The z value is :'+z;
}

//redclaring
let x=5;
let y=5;
var z=50;
{
    var z=5;
}
{
    let x=3;
    console.log(x);
}
console.log(x==y);

// string comparison

let text1 ='Z';
let text2 ='B';
let Ans= text1>text2;
console.log(Ans);

//Objects
let cars = {BMW:'model-1', Hyundai:'model-2'};
console.log(cars);

//Array
let arr=['praveen','ram','saravan','sheik'];
console.log(typeof 'arr');

//Function

function func1(a1,b1){
    return (a1*b1)
}

console.log(func1(5,5));

//object methods
const person = {
    firstName: "Prav",
    lastName : "een",
    id       : 5566,
    fullName : function() {
      return this.firstName + this.lastName;
    }
  };
console.log(person.fullName());
//Length finding
let text ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);

//find date and time
var today = new Date();
var day= today.getDay();
const daylist=["Sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = (hour >= 12)? "PM ":"AM ";
hour = (hour >= 12)? hour-12:hour;

console.log("Current time is : " + hour +" "+ prepand +" "+ minute +":"+ second);

let s1 = 34;
let age = (s1>=18)? "eligible for voting" : "not eligible for voting";
console.log(age);

function mult(){
 let numb1 = document.getElementById('one1').value;
 let numb2 = document.getElementById('one2').value;
 document.getElementById('ans').innerHTML = numb1*numb2;
}
function divi(){
    let numb1 = document.getElementById('one1').value;
    let numb2 = document.getElementById('one2').value;
    document.getElementById('ans').innerHTML = numb1/numb2;
}