import React, { useState } from 'react'
import headlineHome from './../../assets/img/headlineHome.svg';
import { InputHome } from '../../Components/inputHome';
import { CardHome } from '../../Components/CardHome';
import { Header } from './../../Components/Header';
import { Footer } from './../../Components/Footer';

import { Link, useNavigate } from "react-router-dom";

import entregaImg from './../../assets/img/rastreamento.png';
import codigoImg from './../../assets/img/codigo.png';
import ilustrationImg from './../../assets/img/ilustration.png';
import { api } from '../../services/api';
import {usuarioAutenticado} from './../../services/auth'

export default function Home() {
    const [codigoRastreio, setCodigoRastreio] = useState(''); 
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

    async function buscarPacote (){
        const { data, status } = await api.get('/postagem/' + codigoRastreio, {bearerToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNsdnR0d2t1ZDAwMDB0N3FuaHFzdXg4dWQiLCJpYXQiOjE3MTQ5MzE0NTAsImV4cCI6MTcxNTAxNzg1MH0.8WrbvRAtJQQW7_Bkeg86RmN1CWztcc2oQ25VktMdSDA'});
        if(status === 200){
            console.log('Status 200')
            const dados = {
                codigoRastreio: data.codigoRastreio,
                ultimaAtualizacao: data.ultimaAtualizacao,
                
                interacoesPedido: data.interacoesPedido.map(interacao => ({
                    data: interacao.data,
                    hora: interacao.hora,
                    descricao: interacao.descricao,
                    pais: interacao.pais
                })),

                enderecoEntrega: {
                    nome: data.enderecoEntrega.nome,
                    rua: data.enderecoEntrega.rua,
                    bairro: data.enderecoEntrega.bairro,
                    cep: data.enderecoEntrega.cep
                },
            }
            console.log("objeto criado")
            localStorage.setItem("dadosRastreamento", JSON.stringify(dados));
            navigate('/rastreio');
        }
    }
  return (
    <div className='contentArea'>
        <Header/>
        <div className='homeContentArea'>
            <div className='bannerHome'>
                <div className='bannerHomeContent'>
                    
                    <img src={headlineHome}/>
                    <p>Simplifique a sua experiência de rastreamento com o nosso serviço confiável e fácil de usar.</p>
                    
                    <InputHome 
                        metodo={buscarPacote} 
                        codigoRastreio={codigoRastreio} 
                        setCodigoRastreio={setCodigoRastreio}
                    />
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
