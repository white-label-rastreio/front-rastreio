import React, { useEffect } from "react";
import { CardInteracao } from "./../CardInteracao";
import { CardRastreioWrapper } from "./styles/CardRastreioWrapper";
import imgRastreioCard from "./../../assets/img/location.png";

export function CardRastreio({ dados }) {
  console.log("dados", dados?.interacoesPedido[0].active === true);

  return (
    <CardRastreioWrapper className="w-full max-w-[80%]">
      <div className="rastreioWrapperCardInfos  !w-full">
        <div className="infosDoRastreio">
          <h2>Seu Codigo é</h2>
          <p className="codigoRastreio">{dados?.codigoRastreio}</p>

          <h3>Endereco de entrega:</h3>
          <p>{dados?.enderecoEntrega?.nome}</p>
          <p>{dados?.enderecoEntrega?.rua}</p>
          <p>{dados?.enderecoEntrega?.bairro}</p>
          <p>{dados?.enderecoEntrega?.cep}</p>

          <h3>Ultima atualizacao em</h3>
          <p>{dados?.ultimaAtualizacao}</p>
        </div>
        <img src={imgRastreioCard} />
      </div>

      {dados?.interacoesPedido?.map((interacao, key) => 
        (
          <CardInteracao
            key={key}
            data={interacao?.data}
            hora={interacao?.hora}
            descricaoInteracao={interacao?.descricao}
            pais={interacao?.pais}
            active={interacao?.active}
          />
        ) 
      )}
    </CardRastreioWrapper>
  );
}
