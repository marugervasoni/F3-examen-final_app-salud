import React, {createContext} from 'react'

//tema de colores para toda la app, FALTA revisar para hacer estilos acorde al demo
export const themes = {
    light: {
      font: 'black',
      background: 'white'
    },
    dark: {
      font: 'white',
      background: 'black'
    }
};
const ThemeContext = createContext(themes.light); 
export default ThemeContext;