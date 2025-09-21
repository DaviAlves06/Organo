import { useState } from "react";
import Banner from "./components/Banner";
import Forms from "./components/Form";
import Time from "./components/Time";
import Footer from "./components/Footer";


function App() {

  const times = [
    {
      nome: 'Diretores',
      corPrimaria: '#1d1952ff',
      corSecundaria: '#6f7a9cff'
    },
    {
      nome: 'Supervisão',
      corPrimaria: '#1f5887ff',
      corSecundaria: '#8eaac4ff'
    },
    {
      nome: 'Planejamento',
      corPrimaria: '#246d86ff',
      corSecundaria: '#bddaefff'
    },
    {
      nome: 'Engenheiros',
      corPrimaria: '#228c80ff',
      corSecundaria: '#b8f1f1ff'
    },
    {
      nome: 'Topografia',
      corPrimaria: '#128944ff',
      corSecundaria: '#b5edcaff'
    },
    {
      nome: 'Fiscais',
      corPrimaria: '#2f8b11ff',
      corSecundaria: '#c8e8baff'
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Forms times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
      
      {times.map(time => (
        <Time 
          key={time.nome} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}

      <Footer/>

    </div>
  );
}

export default App;
