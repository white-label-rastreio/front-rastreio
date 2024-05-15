import React from 'react'
import { CardInteracaoWrapper } from './styles/CardInteracaoWrapper'
import { FaLocationDot } from "react-icons/fa6";
import caminhaoImg from './../../assets/img/movimento-gray.png'; 

export function CardInteracao({data, hora, descricaoInteracao, pais}) {
    console.log(descricaoInteracao)
  return (
    <CardInteracaoWrapper>
        <div className='cardInteracaoWrapperDivForHover'>

        <div className='infosData'>
            <p className='pDataInfosData'>{data}</p>
            <p>{hora}</p>
        </div>
        {/* ilustracao */}
        <div className='ilustracoesDiv'>
            <img src={caminhaoImg}/>
            <div className='divider'></div>
        </div>
        <div>
            <p className='infosDataDescricaoInteracao'>{descricaoInteracao}</p>
            {pais.length > 0 && 
                <div className='infosDataPaisDiv'>
                    <FaLocationDot style={{fill: "#2ac965", marginRight: "10px"}}/>
                    <p>{pais}</p>
                </div>
            }
        </div>

        </div>
    </CardInteracaoWrapper>
  )
}
