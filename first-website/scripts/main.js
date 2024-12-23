const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pacman-title-lol.jpg") {
    myImage.setAttribute("src", "images/goku-kamehame.avif");
  } else {
    myImage.setAttribute("src", "images/pacman-title-lol.jpg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Enter yo name");
    if (myName){
    localStorage.setItem("name", myName);
    myHeading.textContent = `Pacman? no... , ${myName}man`;
    } else {
        alert("do it now");
        setUserName();
    }
}

if (!localStorage.getItem("name")) {
    setUserName(); 
} else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hey their, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
});




