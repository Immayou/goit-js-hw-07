import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const itemsSet = items.reduce((acc, item) => { return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </div>`}, '')

  return itemsSet
     console.log(itemsSet)
}

galleryListContainer.innerHTML = creategalleryItemsMarkUp(galleryItems)
console.log(galleryListContainer)

