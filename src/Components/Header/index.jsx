import React from 'react'
import logo from './../../assets/img/logo.png';
import { HeaderWrapper } from './styles/HeaderWrapper';

export function Header() {
  return (
    <HeaderWrapper>
        <img src={logo}/>
    </HeaderWrapper>
  )
}
