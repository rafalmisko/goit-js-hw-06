const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

//elem.insertAdjacentHTML(position, string);
// const image = document.createElement("img");
// image.src = "https://placeimg.com/640/480/nature";


//function myGallery( ) {

const imageGallery = document.querySelector("ul");

const element = images
    .map(({url, alt}) => {
				   return `<li><img class="picture" src=${url} width = '350' height = '220' alt='${alt}'></img></li>`;
				})
 
    .join(""); 

imageGallery.insertAdjacentHTML("afterend", element);

document.body.style.backgroundColor = "#0009";
const imageGalleryItems = document.querySelectorAll('ul'); 

console.log(imageGalleryItems); 
Array.from(imageGalleryItems).forEach(element => {element.style.listStyleType = 'none';})

// const imageGalleryItem = document.getElementByClassName('.gallery').forEach(function(element) { 
//   element.style.listStyleType = 'none'; 
// });

//imageGalleryItem.style.listStyleType = 'none';
//Array.from(imageGalleryItem).forEach(element => {element.style.listStyleType = 'none';})
// Array.prototype.forEach.call(document.getElementByClassName('answer'))

// document.querySelectorAll('.myElement').forEach(function(element) {
//     element.style.size = '100px';
// });
