

// console.log(window.document);
// console.log(document.head);
// console.log(document.body)

// document.body.style.backgroundColor = 'red';
// document.body.style.border = "20px solid";

// let htmlBody = document.body;

// htmlBody.style.background = "#f11"
// htmlBody.style.border = "10px dashed"

//  this array has 3 elements, first second and third
// they each have index 0 , 1 and 2
// so apple is at index 0
const mySampleArray = ['apple', 'orange', 'kiwi']
// console.log(mySampleArray[2])

document.getElementById("heading").style.color = "blue";
document.querySelector("#heading").style.color = "blue";
document.getElementById("heading").style.border = "5px solid red"
document.getElementById("heading").style.borderRadius = '20px'

const myList = document.getElementsByClassName('list')
myList[0].style.border = '2px solid'
// console.log(myList)

const paragraphs = document.getElementsByTagName("p")
// console.log(paragraphs)
paragraphs[1].style.fontSize = '1.5em'



// const myFruitsList = document.querySelector('.list');
const myFruitsList = document.querySelectorAll('.list')
console.log(myFruitsList)

// const myImage = document.querySelector('img');
// const myImage = document.querySelector("#photo")
// const myImage = document.querySelector('.image');
const myImage = document.querySelector('[alt="picture of grapes"]');

myImage.style.border = '10px solid #f11'

const h1 = document.querySelector("[data-h1]")
h1.style.textAlign = 'center'
