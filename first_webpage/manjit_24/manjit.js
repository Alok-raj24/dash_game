// let age = window.prompt("what's your age?");

// age = Number(age);
// age+= 1;

// console.log(age ,typeof age);

// let age
// document.getElementById("mySubmit").oneclick = function(){
// age = document.getElementById("myText").value;
// document.getElementById("myH1").textcontent = $(age)
// }

// let x = "pizza";
// let y = "pizza";
// let z = "pizza";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

const PI = 3.14159;
let radius ;
let circumference ;

radius = window.prompt("Enter the radius of a circle");
radius = Number(radius);


document.getElementById("mySubmit").onclick = function(){
   radius =  document.getElementById("myText").value
   radius = Number(radius);
   circumference = 2 * PI * radius;
   document.getElementById("myH3").textContent = circumference + "cm";


}