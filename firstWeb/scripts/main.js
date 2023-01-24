


document.querySelector("li").addEventListener("click",function(){
    alert("别按了cnm");
});

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    let myHeading = document.querySelector('h1');
    if(mySrc === 'images/艾尔海森.png') {
      myImage.setAttribute('src', 'images/胡桃.png');
      myHeading.textContent = '胡桃'
    } else {
      myImage.setAttribute('src', 'images/艾尔海森.png');
      myHeading.textContent = '艾尔海森'
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla 酷毙了，' + myName;
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
 }
     
