import React, {useEffect} from 'react'
import { CardInteracao }  from './../CardInteracao';
import { CardRastreioWrapper } from './styles/CardRastreioWrapper';
import imgRastreioCard from './../../assets/img/location.png'

export function CardRastreio({codigoRastreio, enderecoEntrega, ultimaAtualizacao, interacoesPedido}) {
  useEffect(() => {
    console.log(interacoesPedido)
  }, [])
  
  return ( 
    <CardRastreioWrapper>
      <div className='rastreioWrapperCardInfos'>
        <div className='infosDoRastreio'>
          <h2>Seu Codigo é</h2>
          <p className='codigoRastreio'>{codigoRastreio}</p>
          
          <h3>Endereco de entrega:</h3>
          <p>{enderecoEntrega.nome}</p>
          <p>{enderecoEntrega.rua}</p>
          <p>{enderecoEntrega.bairro}</p>
          <p>{enderecoEntrega.cep}</p>

          <h3>Ultima atualizacao em</h3>
          <p>{ultimaAtualizacao}</p>
        </div>
        <img src={imgRastreioCard}/>
      </div>

        {interacoesPedido.map(
            (interacao) => 
            <CardInteracao 
                key={interacao.id}
                dataHora={interacao.dataHora}
                descricaoInteracao={interacao.descricao}
                pais={interacao.pais}
            />
        )}
    </CardRastreioWrapper>
  )
}
