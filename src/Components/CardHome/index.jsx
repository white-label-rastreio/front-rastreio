import React from 'react'
import { CardHomeWrapper } from './styles/CardHomeWrapper';

export function CardHome({conteudo}) {
  return (
    <CardHomeWrapper>
        <img src={conteudo.imagem}/>
        <div className='conteudoCardHome'>
            <p className='conteudoCardHomeTitulo'>{conteudo.titulo}</p>
            <p>{conteudo.descricao}</p>
            {conteudo.codigo.length > 0 &&
            <p className='CardHomeCodigo'>{conteudo.codigo}</p>
            } 
        </div>
    </CardHomeWrapper>
  )
}
