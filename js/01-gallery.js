import { galleryItems } from './gallery-items.js';

console.log(galleryItems)
// Change code below this line
const galleryListContainer = document.querySelector('.gallery')

function creategalleryItemsMarkUp (items) {
   
   const galleryIitems = items.reduce((acc, {original, preview, description}) => { 
    
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
    
    galleryListContainer.innerHTML = galleryIitems
   
}

creategalleryItemsMarkUp(galleryItems)

galleryListContainer.addEventListener('click', onFullScreenSizeImageClick)

function onFullScreenSizeImageClick (evt) {
  
  evt.preventDefault()

  if (evt.target.nodeName !== 'IMG') {
    return
  }
  
  const selectedImageSource = evt.target.dataset.source;

  const instance = basicLightbox.create(
    `<img width="1400" height="900" src = '${selectedImageSource}'>`,

    {onShow: (instance) => {
        window.addEventListener('keydown', function(evt) {
          if (evt.key === 'Escape') {
           instance.close()}
          })
        }
      }
    )

  instance.show()
}

