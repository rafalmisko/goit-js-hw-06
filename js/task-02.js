const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const newListItems = document.querySelector("#ingredients"); 

const newItems = ingredients.map((item) => {
 const newItem = document.createElement("li"); 
 newItem.textContent = item; 
 newItem.classList.add("item");
  
 return newItem;
});

newListItems.append(...newItems);


 
//map create new tab, forEach 0
// tablica.map((element, index, array) => {
   // Ciało funkcji zwrotnej
// });

// const newList = document.querySelector("#ingredients");
// const firstItem = document.createElement("li");
// firstItem.textContent = "Potatoes";
// newList.prepend(firstItem);
// const secondItem = document.createElement("li");
// secondItem.textContent = "Mushrooms";
// newList.after(firstItem);
// console.log(newList);


// newList.forEach((item) => {
//  const newItem = document.createElement("li"); 
//  newItem.textContent = ingredients; 
//  newItem.classList.add("items");
//  newList.appendChild(newItem); 
//  return newItem;
// });

// newList.append(...newItem);

 
