'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const inputSearch = document.querySelector('.input-picstyle');
const searchButton = document.querySelector('.search-btn');

searchButton.addEventListener('click', () => {
  const KEY = '42490410-91d7fda5db61c0a899b50e1d9';
  const BASE_URL = 'https://pixabay.com/api/';
  const QUERY = inputSearch.value.split(' ').join('+');
  const ORIENTATION = 'horizontal';
  const SAFESEARCH = true;
  const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&orientation=${ORIENTATION}&safesearch=${SAFESEARCH}`;
  console.log(LINK);
  gallery.innerHTML = `<span class="loader"></span>`;
  fetch(LINK)
    .then(response => {
      if (!response.ok) {
        throw new Error('Image error!');
      }

      return response.json();
    })

    .then(data => {
      console.log(data);
      const images = data.hits;
      if (images.length === 0) {
        iziToast.error({
          color: 'yellow',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'center',
          progressBarColor: 'rgb(0, 255, 184)',
          timeout: 2000,
        });
      }
      gallery.innerHTML = images
        .map(
          ({
            webformatURL,
            tags,
            likes,
            views,
            comments,
            downloads,
            largeImageURL,
          }) => {
            return `<div class="pic-card">
            <a class="gallery-link" href="${largeImageURL}">
            <img 
              src="${webformatURL}"
              data-source="${largeImageURL}"
              alt="${tags}" />
              </a>
              <div class="pic-info">
              <div class="info"><p class="label">Likes</p> <p class="info-label">${likes}</p></div>
              <div class="info"><p class="label">Views</p> <p class="info-label">${views}</p></div>
              <div class="info"><p class="label">Comments</p> <p class="info-label">${comments}</p></div>
              <div class="info"><p class="label">Downloads</p> <p class="info-label">${downloads}</p></div>
              </div></div>`;
          }
        )
        .join('');

      let galleryBox = new SimpleLightbox('.pic-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
      galleryBox.refresh();
    })
    .catch(error => {
      alert('error while fetching images');
    });
});
