import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items.js";


function getGalleryItemElementMarkup(
  previewImageURL,
  originalImageURL,
  description
) {
  return `<a href="${originalImageURL}" class="gallery__item" rel="nofollow">
            <img class="gallery__image" src="${previewImageURL}" alt="${description}" />
          </a>`;
}

const galleryElement = document.querySelector("div.gallery");

if (galleryElement) {
  const galleryItemElements = galleryItems
    .map((item) =>
      getGalleryItemElementMarkup(item.preview, item.original, item.description)
    )
    .join("");

  galleryElement.insertAdjacentHTML("afterbegin", galleryItemElements);

  const lightbox = new SimpleLightbox(
    ".gallery a",
    {
      captionsData: "alt",
      captionDelay: 250,
    }
  );
}


