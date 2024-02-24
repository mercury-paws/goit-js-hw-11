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
  const orientation = 'horizontal';
  const LINK = `${BASE_URL}?key=${KEY}&q=${QUERY}&orientation=${orientation}`;
  console.log(LINK);
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
      gallery.innerHTML = images
        .map(({ webformatURL }) => {
          return `<img src="${webformatURL}">`;
        })
        .join('');
    })
    .catch(error => {
      alert('error while fetching images');
    });
});
