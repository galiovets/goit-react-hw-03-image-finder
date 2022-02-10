const API_KEY = '24279670-18f1d5dcd53598bcb68823685';
const BASE_URL = 'https://pixabay.com/api/';

export function getFetch(query, page) {
  let params = `?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  let url = BASE_URL + params;
  return fetch(url)
    .then(res => res.json())
    .then(data => {
      return data;
    });
}
