// Clase 135: consumir multiples context
import { createContext, Component, useContext } from "react";

const Context1 = createContext("primer context");
const Context2 = createContext("segundo context");

const Provider = ({ children }) => {
  return (
    <Context1.Provider value="valor context provider 1">
      <Context2.Provider value="valor context provider 2">
        {children}
      </Context2.Provider>
    </Context1.Provider>
  );
};

// para componentes basados en Clases:
class Contenido extends Component {
  render() {
    return (
      <Context1.Consumer>
        {(valor1) => (
          <Context2.Consumer>
            {(valor2) => <div>{`${valor1} ${valor2}`}</div>}
          </Context2.Consumer>
        )}
      </Context1.Consumer>
    );
  }
}

// para componentes funcionales:
const FunctionalComponent = () => {
  const valor1 = useContext(Context1);
  const valor2 = useContext(Context2);

  return <div>{`${valor1} ${valor2}`}</div>;
};

const App = () => {
  return (
    <Provider>
      <Contenido />
      <FunctionalComponent />
    </Provider>
  );
};

export default App;
