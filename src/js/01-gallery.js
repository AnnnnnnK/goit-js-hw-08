// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
const galleryList = document.querySelector('.gallery');
// console.log(galleryList);

function createMurkup(arr){
  return arr.map(({original,preview, description })=> `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
}
 
galleryList.insertAdjacentHTML('beforeend', createMurkup(galleryItems))
galleryList.addEventListener('click', handlerClick);

function handlerClick(evt) {
    evt.preventDefault();

    if(evt.target === evt.currentTarget){
        return;
    }

    const src = evt.target.dataset.source;
    
    const instance = basicLightbox.create(`
    <img src="${src}" alt="Picture">
`)

instance.show()

const visible = instance.visible()

if(visible){
    galleryList.addEventListener('keydown', handlerKey);

    function handlerKey(evt){
        if(evt.code === 'Escape'){
            instance.close()
        }
        }
}
}