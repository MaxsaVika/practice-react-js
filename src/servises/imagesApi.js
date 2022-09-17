const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `29156299-9f5b3ae85970160cb7d7e54e9`;

export function getImages(search = '') {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${search}&image_type=photo`).then(
    resp => resp.json()
  );
}
