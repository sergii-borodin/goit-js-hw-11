import axios from "axios";

export async function fetchImages(inputValue, page) {
  
  const API_URL = "https://pixabay.com/api/";
  const API_USER_KEY = "key=33114079-512de0a5f20d2e91152223fbb&q";
  const API_RESPONSE_FILTER = `image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=40`;

    const response = await axios.get(`${API_URL}?${API_USER_KEY}=${inputValue}&${API_RESPONSE_FILTER}`);
    return await response.data;
  }
