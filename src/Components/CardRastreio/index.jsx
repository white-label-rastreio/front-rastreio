import React, {useEffect} from 'react'
import { CardInteracao }  from './../CardInteracao';
import { CardRastreioWrapper } from './styles/CardRastreioWrapper';
import imgRastreioCard from './../../assets/img/location.png'

export function CardRastreio({dados}) {
  return ( 
    <CardRastreioWrapper>
      <div className='rastreioWrapperCardInfos'>
        <div className='infosDoRastreio'>
          <h2>Seu Codigo é</h2>
          <p className='codigoRastreio'>{dados.codigoRastreio}</p>
          
          <h3>Endereco de entrega:</h3>
          <p>{dados.enderecoEntrega.nome}</p>
          <p>{dados.enderecoEntrega.rua}</p>
          <p>{dados.enderecoEntrega.bairro}</p>
          <p>{dados.enderecoEntrega.cep}</p>

          <h3>Ultima atualizacao em</h3>
          <p>{dados.ultimaAtualizacao}</p>
        </div>
        <img src={imgRastreioCard}/>
      </div>

        {dados.interacoesPedido.map(
            (interacao) => 
            <CardInteracao 
                data={interacao.data}
                hora={interacao.hora}
                descricaoInteracao={interacao.descricao}
                pais={interacao.pais}
            />
        )}
    </CardRastreioWrapper>
  )
}
