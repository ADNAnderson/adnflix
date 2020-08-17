/* eslint-disable no-console */
import config from '../config';

const URL_VIDEOS = `${config.URL_BACK_TOP}videos`;

function create(objetoDoVideo) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(objetoDoVideo),
  })
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
  create,
};
