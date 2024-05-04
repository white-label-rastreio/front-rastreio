import React, {useState} from 'react'
import { CardRastreio } from '../../Components/CardRastreio'
import { Header } from './../../Components/Header';
import { Footer } from './../../Components/Footer';

import './styles/style.css';

export default function Rastreio() {
    const [infos, setInfos] = useState({
        codigoRastreio: 'PQ551640299257BR',
        enderecoEntrega: {
            nome: 'Felipe Comunian',
            rua: 'Rua Elias Anacleto do Prado, 85 sem complemento',
            bairro: 'Jardim São José Leste. São José dos Campos - SP',
            cep: '12248-625'
        },
        ultimaAtualizacao: '03/05/2024',
        interacoesPedido: [
            {
                id: 1,
                dataHora: {
                    data: '03/05/2024',
                    hora: '20:10',
                },
                descricao: 'Recebido no centro de transporte de partida',
                pais: 'China'
            },
            {
                id: 2,
                dataHora: {
                    data: '13/08/2025',
                    hora: '22:10',
                },
                descricao: 'Pedido em avaliacao - alfandega para pacotes internacionais',
                pais: 'Brasil'
            },
            {
                id: 3,
                dataHora: {
                    data: '29/05/2025',
                    hora: '22:10',
                },
                descricao: 'Pedido em separacao',
                pais: ''
            },
            {
                id: 4,
                dataHora: {
                    data: '23/04/2026',
                    hora: '10:56',
                },
                descricao: 'Despachado pelo vendedos',
                pais: ''
            },
            {
                id: 5,
                dataHora: {
                    data: '03/05/2025',
                    hora: '22:10',
                },
                descricao: 'Recebido na residencia',
                pais: 'Brasil'
            },
        ]

    })

  return (
    <div className='contentArea'>
        <Header/>
        <div className='rastreioContentArea'>
            <CardRastreio
                codigoRastreio={infos.codigoRastreio}
                enderecoEntrega={infos.enderecoEntrega}
                ultimaAtualizacao={infos.ultimaAtualizacao}
                interacoesPedido={infos.interacoesPedido}
                />
        </div>
        <Footer/>
    </div>
  )
}
