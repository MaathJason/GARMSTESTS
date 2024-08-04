// import './App.css'
// import axios from 'axios'
// import { useState, useEffect } from 'react'


// const api = axios.create({
//   baseURL: 'http://localhost:3000'
// })

// function App() {

//   const [cars, setCars] = useState([])
//   const [name, setName] = useState('')
//   const [marca, setMarca] = useState('')
//   const [placa, setPlaca] = useState('')
//   const [ano, setAno] = useState('')


//   useEffect( () => {
//     api.get('/carros').then((response) => {
//       console.log(response.data)
//       setCars(response.data)
//     })
//   }, [])

//   function newAuto() {
//     api
//       .post('/carros', {
//         name,
//         marca,
//         placa,
//         ano,
//     }).then( (response) => {
//       console.log(response)
//     })
//   }

//   return (
//     <div>
//       <h1>Carros</h1>
//       <ul>
//         {cars.map(auto => (
//           <li key={auto.id}>Carro: {auto.carro} - Marca: {auto.marca} - Placa: {auto.placa} - Ano: {auto.ano}</li>
//         ))}
//       </ul>

//       <h2>Adicionar novo carro</h2>
//       <input placeholder='Nome' onChange={ event => setName(event.target.value) }/>
//       <input placeholder='Marca' onChange={ event => setMarca(event.target.value) } />
//       <input placeholder='Placa' onChange={ event => setPlaca(event.target.value) }/>
//       <input placeholder='Ano' onChange={ event => setAno(event.target.value) }/>
//       <button onClick={newAuto}>Adicionar carro</button>
//     </div>
//   )
// }

// export default App



















import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

const api = axios.create({
  baseURL: 'http://localhost:3000'
})

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
      <h1>Carros</h1>
      <ul>
        {cars.map(auto => (
          <li key={auto.id}>
            Carro: {auto.carro} - Marca: {auto.marca} - Placa: {auto.placa} - Ano: {auto.ano}
          </li>
        ))}
      </ul>

      <h2>Adicionar novo carro</h2>
      <input placeholder='Nome' onChange={event => setName(event.target.value)} value={carro} />
      <input placeholder='Marca' onChange={event => setMarca(event.target.value)} value={marca} />
      <input placeholder='Placa' onChange={event => setPlaca(event.target.value)} value={placa} />
      <input placeholder='Ano' onChange={event => setAno(event.target.value)} value={ano} />
      <button onClick={newAuto}>Adicionar carro</button>
    </div>
  )
}

export default App

