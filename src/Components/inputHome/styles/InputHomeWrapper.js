import styled, { css } from 'styled-components';

export const InputHomeWrapper = styled.div`
    background-color: #ffffff;
    width: 90%;
    height: 60px;
    padding: 0px 0px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0px 10px;
    margin-top: 20px;
    
    button{
        background-color: #14d7bf;
        justify-content: flex-end;
        background-image: url(./../../../assets/img/search.svg);
        fill: #ffffff;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        padding: 10px;
        height: 50px;
        width: 15%;
        border-radius: 10px;
        border: none;
        transition: all 1s;
    }
    input{
        text-decoration: none;
        outline: 0;
        border: none;
        font-size: 16px;
        width: 100%;
    }
    .searchIcon{
        fill: #fff;
        width: 24px;
        height: 24px;
        font-size 24px;
    }
`