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
// let radius 
// const radiusPara = document.querySelector("#radius")
// const resultPara = document.querySelector("#result")

// console.log(radiusPara)

// do{
//     radius = Number(prompt("Enter a radius"));
// }
// while(isNaN(radius))

// let calcArea = radius => (Math.pow(radius,2) * Math.PI).toFixed(2);

// radiusPara.textContent += ` : ${radius}`
// resultPara.textContent += ` : ${calcArea(radius)}`

// // alert(`The area of a circle with radius ${radius} is ${calcArea(radius)}`);

//-----Add DOM Elements-----
// function populateList(myShoppingList){
//     const listElement = document.querySelector("ul.shopping")

//     for(let item of myShoppingList){
//         const li = document.createElement("li")
//         li.textContent = item

//         listElement.appendChild(li)
//     }

// }

// let shoppingList = ['bread','cheese', 'green pepper']
// populateList(shoppingList)

//-----Acess and Change Class-----

function populateList(myShoppingList){
    const listElement = document.querySelector("ul.shopping")

    for(let item of myShoppingList){
        const li = document.createElement("li")
        li.textContent = item
        listElement.appendChild(li)
    }
    squareList()
}

function squareList(){

    const listElement = document.querySelector("ul.shopping")
    listElement.classList.remove("circleList")
    listElement.classList.add("squareList")
}

let shoppingList = ['bread','cheese', 'green pepper']
populateList(shoppingList)