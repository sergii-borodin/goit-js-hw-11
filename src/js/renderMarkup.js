import { refs } from "./helpers/refs";

export function renderMarkup(data) {
    refs.gallery.innerHTML = data.hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads}) => `
    <div class="photo-card">
            <img class="image" src="${webformatURL}" alt="" loading="lazy" />
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
}