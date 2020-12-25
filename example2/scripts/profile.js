/*
const myHeading = document.querySelector('h1');
myHeading.textContent = 'Abdullah Tas';


document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
} */


let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/profile-photo.jpg') {
      myImage.setAttribute('src','images/profile-photo1.png');
    } else {
      myImage.setAttribute('src','images/profile-photo.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = storedName;
}

myButton.onclick = function() {
  setUserName();
}