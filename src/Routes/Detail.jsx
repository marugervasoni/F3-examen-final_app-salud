import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            {/* <td>name{data.name}</td> */}
            <td>name</td>
            {/* <td>name{data.email}</td> */}
            <td>name</td>
            {/* <td>name{data.phone}</td> */}
            <td>name</td>
            {/* <td>name{data.website}</td> */}
            <td>name</td> 
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail