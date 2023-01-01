import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';
const KEY = '31235804-68392d2c82bd431c260e5e919';
const PER_PAGE = 12;

const getImages = async (value, page = 1) => {
  const options = {
    params: {
      q: value,
      page: page,
      per_page: PER_PAGE,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      key: KEY,
    },
  };

  const {
    data: { hits, totalHits },
    status,
  } = await axios.get(`${BASE_URL}`, options);

  if (status !== 200 || totalHits === 0) {
    return Promise.reject(
      new Error(
        toast.error(`Sorry, there are no images "${value}". Please try again.`)
      )
    );
  }
  return hits;
};

export const API = {
  getImages,
};
