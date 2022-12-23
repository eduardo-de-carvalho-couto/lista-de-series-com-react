import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario'

function App() {
  
  const [series, setSeries] = useState([])

  const aoCadastrarNovaSerie = serie => {
    console.log(serie)
    setSeries(...series, serie)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario aoCadastrarSerie={serie => aoCadastrarNovaSerie(serie)} />
    </div>
  );
}

export default App;
