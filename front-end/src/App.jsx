import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

const api = axios.create({ //Faz contato com o endereço da máquina na AWS
  baseURL: 'http://3.145.65.214:3000',
});

function App() {
  const [cars, setCars] = useState([]); //Faz uso do useState para setar um estado inicial e um estado depois de alguma atualização
  const [carro, setName] = useState('');
  const [marca, setMarca] = useState('');
  const [placa, setPlaca] = useState('');
  const [ano, setAno] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {  //Hook de efeito para carregar o a lista de carros
    loadCars();
  }, []);

  function loadCars() { //Função para fazer o carregamento correto dos carros após algum atualização
    api.get('/carros')
      .then((response) => {
        console.log(response.data);
        setCars(response.data);
      })
      .catch(error => console.error('Erro:', error));
  }

  function newAuto() { //Função para adicionar novo carro na tabela
    if (!carro || !marca || !placa || !ano) {
      setErrorMessage("Preencha todos os campos");
      return;
    }

    setErrorMessage('');

    api.post('/carros', { carro, marca, placa, ano })
      .then(() => {
        // Recarrega os carros após adicionar um novo
        loadCars();

        // Limpa os inputs após adicionar o carro
        setName('');
        setMarca('');
        setPlaca('');
        setAno('');
      })
      .catch(error => console.error('Erro ao adicionar carro:', error));
  }

  function deleteAuto(id) { //Função para excluis carro na tabela com base no seu id
    api.delete(`/carros/${id}`)
      .then(() => {
        loadCars();
      })
      .catch(error => console.error('Erro ao deletar carro:', error));
  }

  return (
    <div>
      <img id='img-garms' src="https://github.com/MaathJason/GARMSTESTS/raw/main/.github/workflows/garmslogo.png" alt="img-GARMS" />
      <div className='title'>
        <h1>Cadastro de Carros</h1>
      </div>

      <div className='container'> {/* Após perceber alguma mudança nos inputs, tranferir o seu valor para as variáveis da tabela */}
        <h2 id='titulo-cadastro'>{errorMessage || 'Adicionar novo carro'}</h2>
        <input placeholder='Nome' onChange={event => setName(event.target.value)} value={carro} /> 
        <input placeholder='Marca' onChange={event => setMarca(event.target.value)} value={marca} />
        <input placeholder='Placa' onChange={event => setPlaca(event.target.value)} value={placa} />
        <input placeholder='Ano' onChange={event => setAno(event.target.value)} value={ano} />
        <button onClick={newAuto}>Adicionar carro</button>
      </div>

      <h1 className='banco-title'>Banco de Dados</h1>
      <div className='lista-banco'>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Carro</th>
              <th>Marca</th>
              <th>Placa</th>
              <th>Ano</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cars.map((auto) => ( //Renderiza cada item da tabela 
              <tr key={auto.id}>
                <td>{auto.id}</td>
                <td>{auto.carro}</td>
                <td>{auto.marca}</td>
                <td>{auto.placa}</td>
                <td>{auto.ano}</td>
                <td>
                  <button onClick={() => deleteAuto(auto.id)} id="trash-icon"> {/* Botão para apagar itens da tabela */}
                    <img id='trash-bin-icon' alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDUgMyBDIDQuNCAzIDQgMy40IDQgNCBDIDQgNC42IDQuNCA1IDUgNSBMIDcgNSBMIDE3IDUgTCAxOSA1IEMgMTkuNiA1IDIwIDQuNiAyMCA0IEMgMjAgMy40IDE5LjYgMyAxOSAzIEwgMTUgMyBMIDE0IDIgTCAxMCAyIHogTSA1IDcgTCA1IDIwIEMgNSAyMS4xIDUuOSAyMiA3IDIyIEwgMTcgMjIgQyAxOC4xIDIyIDE5IDIxLjEgMTkgMjAgTCAxOSA3IEwgNSA3IHogTSA5IDkgQyA5LjYgOSAxMCA5LjQgMTAgMTAgTCAxMCAxOSBDIDEwIDE5LjYgOS42IDIwIDkgMjAgQyA4LjQgMjAgOCAxOS42IDggMTkgTCA4IDEwIEMgOCA5LjQgOC40IDkgOSA5IHogTSAxNSA5IEMgMTUuNiA5IDE2IDkuNCAxNiAxMCBMIDE2IDE5IEMgMTYgMTkuNiAxNS42IDIwIDE1IDIwIEMgMTQuNCAyMCAxNCAxOS42IDE0IDE5IEwgMTQgMTAgQyAxNCA5LjQgMTQuNCA5IDE1IDkgeiI+PC9wYXRoPgo8L3N2Zz4=" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

