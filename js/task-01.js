const countItemCategories = document.querySelectorAll(".item"); 
console.log(`Number of categories: ${countItemCategories.length}`);



countItemCategories.forEach((item) => {
		console.log(`Categories: ${item.firstElementChild.textContent}`);
        console.log(`Elements: ${item.lastElementChild.children.length }`);
	});

//1. zdefinowana zm. 
//2. metoda qsa spr. class item
//3. consol z destruk. i policzeniem metodą length

//nrCountItem.forEach()
// Iterujący forEach
// numbers.forEach(function (number, index) {
//   console.log(`Indeks ${index}, wartość ${number}`);
// });

//1. zm. the same
//2. forEach, a-z
//3. h2 is firstChild of the three
//4. li is lastChild of the tree

//. 