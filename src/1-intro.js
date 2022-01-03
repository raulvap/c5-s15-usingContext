import { createContext, useContext } from "react";

// el valor por defecto es el valor que se va si no creamos un provider (clase 131)
const ContextDefault = createContext("valor por defecto");

//El valor por defecto de renderiza cuando no colocamos el provider alrededor de app:
const Context2 = createContext("valor por defecto 2");

// Un provider es el encargado de pasar el context a los componentes hijos:
const DefaultProvider = ({ children }) => {
  return (
    <ContextDefault.Provider value={"mi valor"}>
      {children}
    </ContextDefault.Provider>
  );
};
// Ahora este provider los usamos en App:

function App() {
  return (
    <DefaultProvider>
      {/* aqui ponemos el componente hijo: */}
      <ContenidoGeneral />
      <ContenidoSinProvider />
    </DefaultProvider>
  );
}

const ContenidoGeneral = () => {
  // Para poder utilizar los props, usamos el hook de context y le pasamos por parámetro el context que queremos
  const ctx = useContext(ContextDefault);

  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
};

const ContenidoSinProvider = () => {
  const ctx = useContext(Context2);
  return (
    <div>
      <h1>{ctx}</h1>
    </div>
  );
};

export default App;
