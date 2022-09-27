import './App.css';
import freecodecamplogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const [ numClics, setNumClics ] = useState(0);
  
  function manejarClick() {
      setNumClics(numClics + 1);
  };

  function reiniciarContador() {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
        className="freecodecamp-logo"
        src={freecodecamplogo}
        alt="lofo de free code camp"
        />
      </div>
      <div className="contenedor-principal">
        <Contador 
          numClics={numClics}
          />
        <Boton texto="Clic" esBotonDeClic={true} manejarClic={manejarClick} >

        </Boton>
        <Boton texto="Reiniciar" esBotonDeClic={false} manejarClic={reiniciarContador}>

        </Boton>

      </div>
    </div>
  );
}

export default App;
