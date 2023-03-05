// Licznik składa się ze spana i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać jego wartość na jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

//     Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i inicjalizuj wartość 0.
//     Dodaj click listeners do przycisków, wewnątrz których zwiększaj i zmniejszaj wartość licznika.
//     Aktualizuj interfejs nową wartością zmiennej counterValue.

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');

const counter = document.querySelector("#value");
let counterValue = 0; 

function countValueInc (event) { 
   counterValue += 1; 
   return (counter.innerHTML = counterValue);
}
 

function countValueDec (event) { 
   counterValue -= 1; 
   return (counter.innerHTML = counterValue);
}

incrementBtn.addEventListener("click",countValueInc);
decrementBtn.addEventListener("click",countValueDec);

 