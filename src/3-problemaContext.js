// Clase 133: el problema de context:

import { createContext, useContext, useState, memo, useCallback } from "react";

// creamos el context
const Context = createContext();

// creamos el provider
const ContadorProvider = ({ children }) => {
  const [contador, setContador] = useState(0);

  const incrementar = useCallback(() => setContador((x) => x + 1), []);
  const decrementar = useCallback(() => setContador(contador - 1), []);

  return (
    <Context.Provider value={{ contador, incrementar, decrementar }}>
      {children}
    </Context.Provider>
  );
};

// componentes de incrementar y decrementar:
const Incrementar = memo(() => {
  console.log("Incrementando");

  const { incrementar } = useContext(Context);
  return <button onClick={incrementar}>Incrementar</button>;
});

const Decrementar = memo(() => {
  console.log("Decrementando");

  const { decrementar } = useContext(Context);
  return <button onClick={decrementar}>Decrementar</button>;
});

const Label = () => {
  console.log("Label");
  const { contador } = useContext(Context);

  return <h1>{contador}</h1>;
};

const App = () => {
  return (
    <ContadorProvider>
      <Label />
      <Incrementar />
      <Decrementar />
    </ContadorProvider>
  );
};

export default App;

// el problema de Context, es que si queremos pasar más de un dato por provider, debemos hacerlo con un objeto,
// por lo que si el objeto cambia, todas las dependencias van a volver a renderizarse, aun con Memo o useCallback.
// por lo que si no queremos que se vuelva a renderizar, debemos usar varios providers
// context sirve mucho para manejar datos que no cambien tanto durante la aplicación: idioma, usuario, sesión, keyApi,
// si quieres usar algo que cambia constantemente, es mejor usar redux
