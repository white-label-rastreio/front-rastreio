import styled, { css } from 'styled-components';

export const CardInteracaoWrapper = styled.div`
    
    .cardInteracaoWrapperDivForHover{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        height: auto;
        border-radius: 15px;
        padding: 20px 50px;
        border-radius: 10px;
        margin-bottom: 30px;
        transition: all 2s ease;
    }
    .cardInteracaoWrapperDivForHover:hover{
        background-color: #f1f1f1;
    }
    
    .divider {
        width: 174px;
        height: 0px;
        border: 2px dashed #2ac965;
    }

    .pDataInfosData{
        font-size: 16px;
        line-height: 180%;
        color: #787878;
        font-Weight: bold;
    }
    .ilustracoesDiv{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
    }
    .ilustracoesDiv img{
        width: 20%;
    }
    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        color: #787878;
    }
    .infosDataDescricaoInteracao{
        font-weight: 600;
        font-size: 25px;
        color: #2ac965;
        margin: 0;
    }
    .infosDataPaisDiv{
        font-weight: 400;
        font-size: 16px;
        line-height: 180%;
        color: #787878;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    .infosData{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    .infosData p{
        margin: 0;
    }
`;