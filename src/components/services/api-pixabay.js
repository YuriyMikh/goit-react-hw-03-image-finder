import axios from 'axios';

const API_KEY = '36139966-d8e0729651e76793d90192565';

const pixabayApi = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: 12,
  },
});

export const fetchPixabay = async (query, page) => {
  const { data } = await pixabayApi.get(`?q=${query}&page=${page}`);
  return data;
};

// const params = {
//   q: query,
//   page: page,
//   key: API_KEY,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   per_page: 12,
// };

// export const fetchData = (query, page) => {
//   return axios.get(BASE_URL, { params });
// };

//https://pixabay.com/api/ ?
// q = cat &
// page = 1 &
// key = your_key &
// image_type = photo &
// orientation = horizontal &
// per_page = 12
