import { createContext, useContext, useState } from "react";
import axios from 'axios'
import ThemeContext, {themes} from "./ThemeContext";

//tema de colores para toda la app, FALTA revisar para hacer estilos acorde al demo
//informacion traida por la api (fetch o axios)
  //--manejo y actualizacion de E global (useReducer) -->
  // implementar cambio tema (con boton en la app especifico para ello)

const url= "https://jsonplaceholder.typicode.com/users"

// export const initialState = {theme: "light", data: []}
export const initialState = {theme: "", data: []}


//CREACION DELCONTEXTO
// export const ContextGlobal = createContext(themes.dark);
export const ContextGlobal = createContext(undefined);
// despues borrar el console
console.log(ContextGlobal);


export const ContextProvider = ({ children }) => {
  // declarar estados a necesitar
  const [theme, setTheme] = useState(themes.light);
  const [dentist, setDentist] = useState([])

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const handleChangeTheme = () => {
    if (theme === themes.dark) setTheme(themes.light)
    if (theme === themes.light) setTheme(themes.dark)
  }

  const axiosData = async () => {
    const response = await axios.get(url)
    setDentist(response.data)
    console.log(response.data);
  }
  
  return (
    <ContextGlobal.Provider value={{
      // aca toda la info que necesitamos reutilizar en otros componentes
      theme,
      handleChangeTheme,
      axiosData,
      dentist,
      setDentist
    }}>
      {children}
    </ContextGlobal.Provider>
  );
};

//FUNCION QUE SIRVE PARA AHORRARNOS CODIGO
export const useContextGlobal = () => {
  return useContext(ContextGlobal);
}