import styled, { css } from 'styled-components';
//https://www.luiztools.com.br/post/tutorial-listagem-com-busca-em-reactjs/

export const CardRastreioWrapper = styled.div`
    
    .rastreioWrapperCardInfos{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-radius: 15px;
        padding: 20px 50px;
        border: 2px solid #f0f0fc;
        border-radius: 10px;
        margin-bottom: 50px;
    }
    
    h2{
        font-weight: 600;
        font-size: 25px;
        line-height: 40px;
        color: #2ac965;
    }
    .codigoRastreio{
        font-weight: 600 !important;
        font-size: 25px !important;
        line-height: 40px !important;
        color: #3c3f52 !important;
    }
    .infosDoRastreio p{
        font-weight: 400;
        font-size: 14px;
        line-height: 160%;
        color: #787878;
        margin: 0;
    }
    h3{
        font-size: 14px;
        line-height: 160%;
        color: #787878;
    }
    img{
        fill: #2ac965;
    }
`;