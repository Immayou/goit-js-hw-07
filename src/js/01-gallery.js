import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const itemsSet = items.reduce((acc, item) => { 
    
    const template = `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`
    return acc += template}, '')
    
    galleryListContainer.innerHTML = itemsSet
   
}

creategalleryItemsMarkUp(galleryItems)

let galleryImage = document.querySelectorAll('.gallery__image')

galleryListContainer.addEventListener('click', onFullScreenSizeImageClick)

function onFullScreenSizeImageClick (evt) {
  evt.preventDefault()
  const instance = basicLightbox.create(`<img width="1400" height="900" src = '${evt.target.dataset.source}'>`)
  instance.show()
}

