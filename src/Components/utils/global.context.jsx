import { createContext } from "react";

//tema de colores para toda la app, claro u oscuro
//informacion traida por la api (fetch o axios)
  //--manejo y actualizacion de E global (useReducer) -->
  // implementar cambio tema (con boton en la app especifico para ello)


export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(undefined);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};
