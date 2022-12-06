import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

//PAGINA DE INICIO DE LA WEB

// fetch debe ir en global context
// const url = "https://jsonplaceholder.typicode.com/users"

const Home = () => {

  const {dentist, axiosData} = useContextGlobal()

  useEffect(() => {
    axiosData()
  }, []) 
  

  return (
    <>
    <Outlet/>
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {dentist.map(item => <Card key={item.id} name={item.name} username={item.username} id={item.id}/>) }
      </div>
    </main>
    </>
  )
}

export default Home

// La API a utilizar sera la siguiente: https://jsonplaceholder.typicode.com/users

// Y para cada dentista en especifico: https://jsonplaceholder.typicode.com/users/:id