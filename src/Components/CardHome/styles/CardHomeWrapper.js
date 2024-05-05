import styled, { css } from 'styled-components';

export const CardHomeWrapper = styled.div`
    display: flex;
    width: 25%;
    gap: 20px;
    .conteudoCardHome{
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align: start;
    }

    .conteudoCardHome p{
        font-weight: 400;
        font-size: 15px;
        line-height: 160%;
        color: #787878;
        margin: 0 ;
    }
    .conteudoCardHomeTitulo{
        font-weight: 600 !important;
        font-size: 25px !important;
        line-height: 60px !important;
        color: #2ac965 !important;
    }
    .CardHomeCodigo{
        font-weight: 600 !important;
        font-size: 20px !important;
        line-height: 60px !important;
        color: #3c3f52 !important;
    }

    @media (max-width: 1441px) {
        width: 40%;
    }

`