// Clase 134: context en componentes de clase

import { Component, createContext } from "react";

const Context = createContext("mi valor por defecto");

const Provider = ({ children }) => {
  return <Context.Provider value="otro valor">{children}</Context.Provider>;
};

class Contenido extends Component {
  // hay 2 formas para obtener el valor de context en componentes de Clase:
  // la 1ra, es con una propiedad static:
  static contextType = Context;
  render() {
    return (
      <div>
        <h1>{this.context}</h1>
      </div>
    );
  }
}

const App = () => {
  return (
    <Provider>
      <Contenido />
      {/* También podemos acceder al context directamente: */}
      <Context.Consumer>{(valor) => <div>{valor}</div>}</Context.Consumer>
    </Provider>
  );
};

export default App;
