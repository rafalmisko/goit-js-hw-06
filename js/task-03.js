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
				   return `<li><img class="picture" src=${element.url} width = '350' height = '220' alt='${element.alt}'></img></li>`;
				})
 
    .join(""); 

  imageGallery.insertAdjacentHTML("afterend", element);
   
    