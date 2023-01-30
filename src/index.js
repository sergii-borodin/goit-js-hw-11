// import { Notify } from "notiflix";
import { fetchImages } from "./js/fetchImages";
import { refs } from "./js/helpers/refs";
import { renderMarkup } from "./js/renderMarkup";

refs.searchForm.addEventListener('submit', onFormSubmit);

let searchInput = '';
async function onFormSubmit(e) {
    e.preventDefault();

    fetchImages(searchInput).then(data => renderMarkup(data)).catch(error => console.log(error));
}








// try {
//     const data = await fetchImages("cat");
// console.log(data);
// } catch (error) {
// }

//Если бэкенд возвращает пустой массив, значит ничего подходящего найдено небыло. В таком случае показывай уведомление с текстом"Sorry, there are no images matching your search query. Please try again."

