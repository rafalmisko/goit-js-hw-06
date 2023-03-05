// Napisz skrypt, który przy utracie fokusu na polu input 
//(zdarzenie blur) 
//sprawdza jego zawartość na prawidłową liczbę wprowadzonych symboli.


//     Informacja o liczbie symboli, która powinna znajdować się w 
//polu input, pokazuje się w jego atrybucie data-length.
//     Jeśli wprowadzono odpowiednią liczbę symboli, to border pola input staje się zielone, a jeśli liczba jest nieprawidłowa - czerwone.

// Aby dodać style, używaj klas CSS valid i invalid, które już 
//dodaliśmy do plików źródłowych zadania.

//1 set catch input by id
//2 set variable to write value, wtf???????????
//3 if on input
//4 els 


 const textInput = document.querySelector("#validation-input"); 
 const lengthDataInput = textInput.getAttribute("data-length"); 
 
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

textInput.addEventListener("blur", (event) => {
      if (event.currentTarget.value.length.toString() === lengthDataInput) { 
        console.log(event.currentTarget.value.length);
          textInput.classList.add("valid");
          textInput.classList.remove("invalid");
        
      
      } else {

        textInput.classList.add("invalid");
        textInput.classList.remove("valid");
      
      }

    
});




 