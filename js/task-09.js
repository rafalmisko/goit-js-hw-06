
//Napisz skrypt, który zmienia kolor tła elementu 
//<body> poprzez style inline po kliknięciu na 
//button.change-color i wprowadza wartość koloru 
//do span.color.


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorBody = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const color = document.querySelector(".color");


changeColorBtn.addEventListener("click", (event) => {
  const functionRandomColor = getRandomHexColor();
  colorBody.style.backgroundColor = functionRandomColor;
  color.textContent = functionRandomColor; 


}); 
