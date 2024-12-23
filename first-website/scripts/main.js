const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pacman-title-lol.jpg") {
    myImage.setAttribute("src", "images/goku-kamehame.avif");
  } else {
    myImage.setAttribute("src", "images/pacman-title-lol.jpg");
  }
});
