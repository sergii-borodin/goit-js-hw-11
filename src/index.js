// import { Notify } from "notiflix";
import { fetchImages } from "./js/fetchImages";
import { refs } from "./js/helpers/refs";

refs.searchForm.addEventListener('submit', onFormSubmit);

let searchInput = '';
async function onFormSubmit(e) {
    e.preventDefault();

        fetchImages(searchInput).then(data => console.log(data))

}








// try {
//     const data = await fetchImages("cat");
// console.log(data);
// } catch (error) {
// }

//Если бэкенд возвращает пустой массив, значит ничего подходящего найдено небыло. В таком случае показывай уведомление с текстом"Sorry, there are no images matching your search query. Please try again."

