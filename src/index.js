import { Notify } from "notiflix";
import { fetchImages } from "./js/fetchImages";
import { refs } from "./js/helpers/refs";
import { renderMarkup } from "./js/renderMarkup";
// Main import from documentation
import SimpleLightbox from "simplelightbox";
// Additional import with styles
import "simplelightbox/dist/simple-lightbox.min.css";

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadButton.addEventListener('click', onLoadMoreButtonClick);

let searchInput = "";
let page = 1;

const lightbox = new SimpleLightbox('.gallery a', { captionDelay:250 });

async function onFormSubmit(e) {

    e.preventDefault();

    page = 1;
    refs.gallery.innerHTML = "";
    searchInput = e.currentTarget.searchQuery.value.trim();

    if (searchInput.length === 0) {
        Notify.failure("Oops, You forgot to enter a searching word! ");
        return
    } 
        try {
            const data = await fetchImages(searchInput, page);
                    if (data.totalHits === 0) {
                        Notify.failure("Sorry, there are no images matching your search query. Please try again. ");
                        refs.loadButton.style.display = "none";
                    } else {
                        Notify.success(`Hooray! We found ${data.totalHits} images.`);
                        renderMarkup(data);
                        lightbox.refresh();
                        if (data.totalHits > 40) {
                            refs.loadButton.style.display = "block";
                        }
                    }      
        } catch (error) {
            console.log(error)};
        }

async function onLoadMoreButtonClick(e) {
    ++page;
    console.log(page);

    try {
        const data = await fetchImages(searchInput, page);
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
    } catch (error) {
        console.log(error.message)
    }
}
