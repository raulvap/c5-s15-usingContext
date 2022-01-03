// Clase 132: actualizando el estado de un Context:

import { createContext, useContext, useState } from "react";

const Context = createContext({ valor: false, toggle: () => {} });

const Provider = ({ children }) => {
  const [valor, setValor] = useState(false);
  const value = {
    valor,
    toggle: () => setValor(!valor),
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

const App = () => {
  return (
    <Provider>
      <Contenido />
    </Provider>
  );
};

const Contenido = () => {
  const { valor, toggle } = useContext(Context);

  return (
    <div>
      <label>{valor.toString()}</label>
      <button onClick={toggle}>Toggle</button>
    </div>
  );
};

export default App;
