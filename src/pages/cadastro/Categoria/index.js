import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDeafult';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais);
  
  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,     //  nome: 'valor'
    })
  }
  
  function pegarDados(dados){
    setValue(
      dados.target.getAttribute('name'),
      dados.target.value
      );
    }
    
    return  (
      <PageDefault>
        <h1>Cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(dados){
            dados.preventDefault();
            setCategorias([
              ...categorias,
              values
            ]);

            setValues(valoresIniciais) 
        }}>

        <FormField
          label="Nome da Categoria"
          type="texto"
          name="nome"
          value={values.nome}
          onChange={pegarDados}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={pegarDados}
        />

      {/*  <div>
          <label>
            Descrição:
            <input
              type="text"
              value={values.descricao}
              name="descricao"
              onChange={pegarDados}
            />
          </label>
        </div>  */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.nome}
          onChange={pegarDados}
        />
                
      {/*  <div>
          <label>
            Cor:
            <input
              type="color"
              value={values.cor}
              name="cor"
              onChange={pegarDados}
            />
          </label>
        </div> */}

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
            Home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;