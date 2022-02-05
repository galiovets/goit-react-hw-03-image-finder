// 24279670-18f1d5dcd53598bcb68823685 - API KEY
// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12 - URL

const API_KEY = '24279670-18f1d5dcd53598bcb68823685';
const BASE_URL = 'https://pixabay.com/api/';

export function getFetch(query) {
  let params = `?q=${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  let url = BASE_URL + params;
  fetch(url).then(data => data.json().then(console.log(data)));
}
