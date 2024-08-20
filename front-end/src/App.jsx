import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const api = axios.create({
  baseURL: 'http://ec2-18-225-57-46.us-east-2.compute.amazonaws.com:3000/',
});

function App() {
  const [cars, setCars] = useState([])
  const [carro, setName] = useState('')
  const [marca, setMarca] = useState('')
  const [placa, setPlaca] = useState('')
  const [ano, setAno] = useState('')

  useEffect(() => {
    api.get('/carros')
      .then((response) => {
        console.log(response.data)
        setCars(response.data)
      })
      .catch(error => console.error('Erro:', error))
  }, [])

  function newAuto() {
    api.post('/carros', { carro, marca, placa, ano })
      .then((response) => {
        console.log(response)
        setCars([...cars, response.data])
      })
      .catch(error => console.error('Erro ao adicionar carro:', error))
  }

  return (
    <div>
      <img id='img-garms' src="img/1.png" alt="img-GARMS"/>
      <div className='title'>      
        <h1>Cadastro de Carros</h1>
      </div>
      
      <div className='container'>
        <h2>Adicionar novo carro</h2>
        <input placeholder='Nome' onChange={event => setName(event.target.value)} value={carro} />
        <input placeholder='Marca' onChange={event => setMarca(event.target.value)} value={marca} />
        <input placeholder='Placa' onChange={event => setPlaca(event.target.value)} value={placa} />
        <input placeholder='Ano' onChange={event => setAno(event.target.value)} value={ano} />
        <button onClick={newAuto}>Adicionar carro</button>
      </div>

      <h1>Banco de Dados</h1>
      <div className='lista-banco'>
        <table>
          <thead>
            <tr>
              <th>Carro</th>
              <th>Marca</th>
              <th>Placa</th>
              <th>Ano</th>
            </tr>
          </thead>
          <tbody>
            {cars.map(auto => (
              <tr key={auto.id}>
                <td>{auto.carro}</td>
                <td>{auto.marca}</td>
                <td>{auto.placa}</td>
                <td>{auto.ano}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
