import React, {useState, useEffect} from 'react'
import { CardRastreio } from '../../Components/CardRastreio'
import { Header } from './../../Components/Header';
import { Footer } from './../../Components/Footer';

import './styles/style.css';

export default function Rastreio() {
    const [dadosRastreamento, setDadosRastreiamento] = useState({});
    const [canLoad, setCanLoad] = useState(false);
    useEffect(() => {
    carregaTela();
  }, [])
  
  function carregaTela(){
    setDadosRastreiamento(JSON.parse(localStorage.getItem("dadosRastreamento")));
    console.log('Objeto foi pego dentro da outra pagina')
    setCanLoad(true);
}


  return (
    <div className='contentArea'>
        <Header/>
        <div className='rastreioContentArea'>
            { canLoad &&
                <CardRastreio
                    dados={dadosRastreamento}
                />
            }
        </div>
        <Footer/>
    </div>
  )
}
