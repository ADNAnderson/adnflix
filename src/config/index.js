const URL_BACK_TOP = window.location.hostname.includes('localhost')
  ? 'http//localhost:8080/categorias'
  : 'https://adnflix.herokuapp.com/categorias';

export default {
  URL_BACK_TOP,
};
