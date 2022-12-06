import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//PAGINA DE INICIO DE LA WEB
const url = "https://jsonplaceholder.typicode.com/users"

const Home = () => {

  const [dentist, setDentist] = useState([])

 useEffect(() => {
  const axiosData = async () => {
    const response = await axios.get(url)
    setDentist(response.data)
    console.log(response.data);
  }
  axiosData()
 }, []) 
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id}/>) }
      </div>
    </main>
  )
}

export default Home

// La API a utilizar sera la siguiente: https://jsonplaceholder.typicode.com/users

// Y para cada dentista en especifico: https://jsonplaceholder.typicode.com/users/:id