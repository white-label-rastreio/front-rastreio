import React from 'react'
import { InputHomeWrapper } from './styles/InputHomeWrapper';

export function InputHome({metodo}) {
  return (
    <InputHomeWrapper>
        <input placeholder='Digite seu código de rastreio'/>
        <button onClick={metodo}/>
    </InputHomeWrapper>
  )
}
