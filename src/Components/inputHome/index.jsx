import React from 'react'
import { InputHomeWrapper } from './styles/InputHomeWrapper';

export function InputHome({metodo, codigoRastreio, setCodigoRastreio}) {
  return (
    <InputHomeWrapper>
        <input 
          placeholder='Digite seu código de rastreio'
          value={codigoRastreio}
          onChange={(e) => setCodigoRastreio(e.target.value)}  
        />
        <button onClick={metodo}/>
    </InputHomeWrapper>
  )
}
