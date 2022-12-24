import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario'
import Servico from './components/Servico';

function App() {
  
  const servicos = [
    {
      nome: 'Netflix',
      corPrimaria: '#F40C24',
      corSecundaria: '#fee7e9'
    },
    {
      nome: 'Prime Video',
      corPrimaria: '#04ACE4',
      corSecundaria: '#e6f8ff'
    },
    {
      nome: 'HBO Max',
      corPrimaria: '#5452C5',
      corSecundaria: '#d9d9f2'
    },
    {
      nome: 'Showtime',
      corPrimaria: '#180202',
      corSecundaria: '#fde7e8'
    }
  ]

  const [series, setSeries] = useState([])

  const aoCadastrarNovaSerie = serie => {
    setSeries([...series, serie])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario servicos={servicos.map(servico => servico.nome)} aoCadastrarSerie={serie => aoCadastrarNovaSerie(serie)} />
      
      {servicos.map(servico => <Servico 
        key={servico.nome} 
        nome={servico.nome} 
        corPrimaria={servico.corPrimaria} 
        corSecundaria={servico.corSecundaria}
        series={series.filter(serie => serie.servico === servico.nome)}
      />)}

    </div>
  );
}

export default App;
