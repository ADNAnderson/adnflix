import config from '../config';

const URL_CATEGORIES = `${config.URL_BACK_TOP}categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoSevidor) => {
      if (respostaDoSevidor.ok) {
        const resposta = await respostaDoSevidor.json();
        console.log(resposta);
        return resposta;
      }

      throw new Error('Não foi possível acessar o servidor');
    });
}

export default {
  getAllWithVideos,
};
