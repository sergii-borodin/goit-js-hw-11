import axios from "axios";
//&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40
export async function fetchImages(inputValue) {
    const response = await axios.get(`https://pixabay.com/api/?key=33114079-512de0a5f20d2e91152223fbb&q=${inputValue}`);
    return await response.data;
  }
