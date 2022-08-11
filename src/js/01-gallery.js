import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const galerryIitems = items.reduce((acc, {original, preview, description}) => { 
    
    const template = `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`
    return acc += template}, '')
    
    galleryListContainer.innerHTML = galerryIitems
   
}

creategalleryItemsMarkUp(galleryItems)

galleryListContainer.addEventListener('click', onFullScreenSizeImageClick)

function onFullScreenSizeImageClick (evt) {
  
  evt.preventDefault()

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src = '${evt.target.dataset.source}'>`
    )

  instance.show()
  
  window.addEventListener('keydown', onModalImageCloseKeydown)
  
  function onModalImageCloseKeydown (evt) {

  if (evt.key === 'Escape') {
  instance.close()}
  }

}

