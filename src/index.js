import { Notify } from "notiflix";
import { fetchImages } from "./js/fetchImages";
import { refs } from "./js/helpers/refs";
import { renderMarkup } from "./js/renderMarkup";

refs.searchForm.addEventListener('submit', onFormSubmit);
refs.loadButton.addEventListener('click', onButtonClick)

let searchInput = "";
let page = 1;

function onFormSubmit(e) {

    e.preventDefault();

    refs.gallery.innerHTML = "";
    searchInput = e.currentTarget.searchQuery.value.trim();

    fetchImages(searchInput, page).then(data => {

        if (data.totalHits === 0) {
            Notify.failure("Sorry, there are no images matching your search query. Please try again. ");
            refs.loadButton.style.display = "none";
        } else {
            Notify.success(`Hooray! We found ${data.totalHits} images.`);
            renderMarkup(data);
            refs.loadButton.style.display = "block";
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
        renderMarkup(data)
    }).catch (error => console.log(error));
}