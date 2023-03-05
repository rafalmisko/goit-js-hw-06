// Napisz skrypt, który reaguje na zmianę wartości 
// input#font-size-control (zdarzenie input) i 
// zmienia styl inline span#text aktualizując 
// właściwość font-size. W rezultacie, podczas 
// przeciągania paska przesuwania będzie zmieniał 
// się rozmiar tekstu.

//1 variable font
//2 variable text
//3 style to variable fsc
//4 event on fsc
//5 csl aelistener, currenttarget
//5 4 toString, new veriable ?????
 

const fontSizeControl = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
text.style.fontSize = fontSizeControl.value; 


fontSizeControl.addEventListener("input", (event) => {
   
text.style.fontSize = `${event.currentTarget.value}px`; 


}); 