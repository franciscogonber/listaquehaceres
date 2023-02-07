import { useState } from 'react';
import './App.css';
import Formulario from './componentes/Formulario';
import Lista from './componentes/Lista';
function App() {
  const [lista, setLista] = useState([
    {
      titulo: "Get Python Black Belt",
      estado: true
    }
  ]);
  return (
    <div className="App">
     
     <Formulario lista={lista} setLista={setLista} />
     <Lista lista={lista} setLista={setLista}/>
    </div>
  );
}

export default App;
