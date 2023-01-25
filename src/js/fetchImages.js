import axios from "axios";

export async function fetchImages(inputValue) {
    const response = await axios.get(`https://pixabay.com/api/?key=33114079-512de0a5f20d2e91152223fbb&q=${inputValue}`);
    return await response.data;
  }
