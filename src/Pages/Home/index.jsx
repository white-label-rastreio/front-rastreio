import React from 'react'
import headlineHome from './../../assets/img/headlineHome.svg';
import { InputHome } from '../../Components/inputHome';
import { CardHome } from '../../Components/CardHome';
import { Header } from './../../Components/Header';
import { Footer } from './../../Components/Footer';

import { Link, useNavigate } from "react-router-dom";

import entregaImg from './../../assets/img/rastreamento.png';
import codigoImg from './../../assets/img/codigo.png';
import ilustrationImg from './../../assets/img/ilustration.png';

export default function Home() {
    const navigate = useNavigate();
    const conteudoCards = [
        {
            imagem: entregaImg,
            titulo: 'Rastreamento',
            descricao: 'Acompanhe em tempo real o status de entrega dos seus pacotes, saiba onde eles estão e esteja sempre um passo à frente.',
            codigo: ''
        },
        {
            imagem: codigoImg,
            titulo: 'Como rastrear um objeto?',
            descricao: 'Basta informar o código recebido por seu vendedor e/ou loja. Exemplo:',
            codigo: 'PQ436222813BR'
        }
    ]

    function clickSearch (){
        navigate('/rastreio');
    }
  return (
    <div className='contentArea'>
        <Header/>
        <div className='homeContentArea'>
            <div className='bannerHome'>
                <div className='bannerHomeContent'>
                    
                    <img src={headlineHome}/>
                    <p>Simplifique a sua experiência de rastreamento com o nosso serviço confiável e fácil de usar.</p>
                    
                    <InputHome metodo={clickSearch}/>
                </div>
                <img src={ilustrationImg}/>
            </div>
            <div className='conteudosEmCardHome'>
                <CardHome
                    conteudo={conteudoCards[0]}
                />
                <CardHome
                    conteudo={conteudoCards[1]}
                />
            </div>
        </div>
        <Footer/>
    </div>
  )
}
