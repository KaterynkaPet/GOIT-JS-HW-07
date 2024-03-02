function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

  const bgColor = document.querySelector(".color");
  const btnColor = document.querySelector(".change-color");

  btnColor.addEventListener("click", (event) => {
    bgColor.textContent = getRandomHexColor()
    document.body.style.backgroundColor = bgColor.textContent
  })