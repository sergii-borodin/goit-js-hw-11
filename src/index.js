import { Notify } from "notiflix";
import { fetchImages } from "./js/fetchImages";
import { refs } from "./js/helpers/refs";
import { renderMarkup } from "./js/renderMarkup";
// Main import from documentation
import SimpleLightbox from "simplelightbox";
// Additional import with styles
import "simplelightbox/dist/simple-lightbox.min.css";

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadButton.addEventListener('click', onButtonClick);

let searchInput = "";
let page = 1;

const lightbox = new SimpleLightbox('.gallery a', { captionDelay:250 });

function onFormSubmit(e) {

    e.preventDefault();

    refs.gallery.innerHTML = "";
    searchInput = e.currentTarget.searchQuery.value.trim();

    fetchImages(searchInput, page).then(data => {

        if (searchInput.length === 0) {
            Notify.failure("Oops, You forgot to enter a searching word! ");
            return
        } else {
            if (data.totalHits === 0) {
                Notify.failure("Sorry, there are no images matching your search query. Please try again. ");
                refs.loadButton.style.display = "none";
            } else {
                Notify.success(`Hooray! We found ${data.totalHits} images.`);
                renderMarkup(data);
                lightbox.refresh();
                refs.loadButton.style.display = "block";
            }
        }
    }).catch(error => console.log(error));

}

function onButtonClick(e){
    ++page;
    console.log(page);

    fetchImages(searchInput, page).then(data => { 
        if (page > data.totalHits / 40) {
            Notify.failure("We're sorry, but you've reached the end of search results");
            refs.loadButton.style.display = "none";
        }
        renderMarkup(data);

            const { height: cardHeight } = document
        .querySelector(".gallery")
        .firstElementChild.getBoundingClientRect();
    
        window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
        });

        lightbox.refresh();

    }).catch (error => console.log(error));
}