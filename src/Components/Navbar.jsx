import React from 'react'
import { Link } from 'react-router-dom'
import {useContextGlobal} from '../Components/utils/global.context'
import ThemeContext from './utils/ThemeContext'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {theme, handleChangeTheme} = useContextGlobal(ThemeContext)

  return (
    <nav>
      {/* <img src="/images/DH.png" alt="dh" /> */}
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <Link to='/' >Home</Link>
      <Link to='contacto' >Contact</Link>
      {/* faltaria linkear dentist id */}
      <Link to='favs' >Favs</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          {/* al boton le agregue el evento y los estilos pero no funciona bien */}
      <button onClick={handleChangeTheme} style={{background: theme.background, font: theme.font}}>Change theme</button>
    </nav>
  )
}

export default Navbar