import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario'
import Servico from './components/Servico';
import { v4 as uuidv4 } from 'uuid';

function App() {
  
  const [servicos, setServicos] = useState([
    {
      id: uuidv4(),
      nome: 'Netflix',
      cor: '#F40C24',
    },
    {
      id: uuidv4(),
      nome: 'Prime Video',
      cor: '#04ACE4',
    },
    {
      id: uuidv4(),
      nome: 'HBO Max',
      cor: '#5452C5',
    },
    {
      id: uuidv4(),
      nome: 'Showtime',
      cor: '#180202',
    }
  ])

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Stranger Things',
      imagem: 'https://lh3.googleusercontent.com/6BIpgfY4NKHhySBQMFhsKs2n-BHHsTL9gEZojn-IHuha9v9Fi_YrPGIHm2Ytvcm1M_HQfKmiDmE4qQaPmREA_KOxv-4=w128-h128-e365-rj-sc0x00ffffff',
      servico: 'Netflix'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Dexter',
      imagem: 'https://lh3.googleusercontent.com/VhW57ypFyiA41yM2Mo-D80kaMlQSrY3yAa6j1JLSD-IHGQR3L707PKxMVgcL9YzrYtT5-7OnF8hqNlbPiWnOoq4IOA=w128-h128-e365-rj-sc0x00ffffff',
      servico: 'Showtime'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Peaky Blinders',
      imagem: 'https://sm.ign.com/t/ign_pt/cover/p/peaky-blin/peaky-blinders-mastermind_72vn.128.jpg',
      servico: 'Netflix'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'House of the Dragon',
      imagem: 'https://sm.ign.com/t/ign_pt/cover/g/game-of-th/game-of-thrones-house-of-the-dragon_2cym.128.jpg',
      servico: 'HBO Max'
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'invincible',
      imagem: 'https://img1.evosis.org/series/4660/icon/icon0.X256.webp',
      servico: 'Prime Video'
    }
  ]

  const [series, setSeries] = useState(inicial)

  const aoCadastrarNovaSerie = serie => {
    setSeries([...series, serie])
  }

  function deletarSerie(id) {
    setSeries(series.filter(serie => serie.id !== id))
  }

  function mudarCor(cor, id) {
    setServicos(servicos.map(servico => {
      if(servico.id == id) {
        servico.cor = cor;
      }

      return servico
    }));
  }

  function cadastrarServico(novoServico) {
    setServicos([ ...servicos, {...novoServico, id: uuidv4()} ])
  }

  function resolverFavorito(id) {
    setSeries(series.map(serie => {
      if(serie.id === id) serie.favorito = !serie.favorito;
      return serie
    }))
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        cadastrarServico={cadastrarServico}
        servicos={servicos.map(servico => servico.nome)} 
        aoCadastrarSerie={serie => aoCadastrarNovaSerie(serie)} 
      />
      
      {servicos.map(servico => <Servico 
        aoFavoritar={resolverFavorito}
        key={servico.nome} 
        nome={servico.nome} 
        cor={servico.cor} 
        series={series.filter(serie => serie.servico === servico.nome)}
        aoDeletar={deletarSerie}
        id={servico.id}
        mudarCor={mudarCor}
      />)}

    </div>
  );
}

export default App;
