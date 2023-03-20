//-----Function Declaration-----
// function greet(name){
//     console.log(`hello ${name}`);
// }

// greet('andrew');

//-----Function Expression-----
// let greet = function(name){
//     console.log(`Hello ${name}`)
// }

// greet('andrew');

//-----Arrow Function-----
// let greet = user =>{
//     console.log(`Hello ${user}`)
// }

// greet('andrew')

//-----Function Declaration with Two Args and Deafualt Value-----
// function greet(name, time = 'day'){
//     console.log(`good ${time} ${name}`);
// }

//###Arrow Fucntion###
// // let greet = (user, time = 'day') => console.log(`Good ${time} ${user}`)

// greet('andrew');

//-----Calc Area of Cicrcle Function w/ Return Statement-----
let radius 

do{
    radius = Number(prompt("Enter a radius"));
}
while(isNaN(radius))

let calcArea = radius => (Math.pow(radius,2) * Math.PI).toFixed(2);

alert(`The area of a circle with radius ${radius} is ${calcArea(radius)}`);