// Napisz skrypt, który przy wpisywaniu tekstu 
// w polu input input#name-input (zdarzenie input) 
// wstawia jego aktualną wartość do span#name-output. 
// Jeśli pole input jest puste, w spanie powinien wyświetlić 
// się komunikat "Anonymous".

const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    textOutput.textContent = event.currentTarget.value;


}); 





// const textInput = document.querySelector(".text-input");
// const output = document.querySelector(".output");

// textInput.addEventListener("input", (event) => {
//   output.textContent = event.currentTarget.value;
// });
