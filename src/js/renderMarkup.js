import { refs } from "./helpers/refs";

export function renderMarkup(data) {
    const markup = data.hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <div class="photo-card">
            <a href="${largeImageURL}"><img class="image" src="${webformatURL}" alt="${tags}" loading="lazy" /></a>
        <div class="info-flex">
            <p class="info-item">
                <b>Likes: ${likes}</b>
            </p>
            <p class="info-item">
                <b>Views: ${views}</b>
            </p>
            <p class="info-item">
                <b>Comments: ${comments}</b>
            </p>
            <p class="info-item">
                <b>Downloads: ${downloads}</b>
            </p>
      </div>
      </div>
  </div>`)
        .join('')
    refs.gallery.insertAdjacentHTML('beforeend', markup);
}