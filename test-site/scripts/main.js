let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
      myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
      myImage.setAttribute('src', 'images/firefox.jpg');
    }
}
function setHeading(name) {
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla is cool,'+name+'!';
}

function setUserName() {
  let myName = prompt('Please enter your name');
  localStorage.setItem('name', myName);
  setHeading(myName);
} 

let storedName = localStorage.getItem('name');
if(!storedName) {
   setUserName();
} else {
   setHeading(storedName);
}

let myButton = document.querySelector('button'); 
myButton.onclick = setUserName;