import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

import { galleryItems } from './gallery-items';

const galleryContainer = document.querySelector(".gallery");
const createGallery = makeCreateGallery(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', createGallery);

function makeCreateGallery(items) {
  return items
    .map(({ preview, description, original }) => {
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
      <img class="gallery__image"
          src="${preview}"
          alt="${description}"
    />
  </a>
</li>`;
  })
  .join("");
}

const gallery = new SimpleLightbox('.gallery a', { 

    captionsData: 'alt',
    captionsDelay: 250,
    overlayOpacity: 0.8,
    scrollZoom: false,
});

console.log(galleryItems);
 