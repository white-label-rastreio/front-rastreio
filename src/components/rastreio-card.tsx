import { DataPostagem } from "../types";

import LocationImage from "../assets/img/location.png";

interface RastreioCardProps {
  data: DataPostagem | null;
}

export const RastreioCard = ({ data }: RastreioCardProps) => {
  return (
    <div className="flex justify-between p-3 md:p-7 border rounded-md md:h-[300px]">
      <div className="w-full md:w-[70%] flex flex-col ">
        <div className="flex flex-col md:items-start items-center">
          <h1 className="font-semibold text-[#2ac965] text-2xl lg:text-3xl">
            Seu Codigo é:
          </h1>
          <span className="font-semibold  text-3xl lg:text-4xl ">
            {data?.codigoRastreio}
          </span>
        </div>
        <div className="flex flex-col mt-5 justify-between gap-y-5">
          <div className="flex flex-col">
            <h2 className="text-2xl font-semibold text-gray-800">
              Endereço de entrega:
            </h2>
            <p className="text-lg text-gray-600">
              {data?.enderecoEntrega.nome}
            </p>
            <p className="text-lg text-gray-600">{data?.enderecoEntrega.rua}</p>
            <p className="text-lg text-gray-600">
              {data?.enderecoEntrega.bairro}
            </p>
          </div>
          <div className="flex gap-3 items-center flex-wrap">
            <h3 className="text-xl font-medium text-gray-700">
              Última atualização em:
            </h3>
            <span className="text-lg text-gray-500">
              {data?.ultimaAtualizacao}
            </span>
          </div>
        </div>
      </div>
      <div className="relative h-[250px] w-[250px] max-md:hidden">
        <img
          src={LocationImage}
          alt="location image"
          className="absolute w-full h-full object-cover"
        />
      </div>
    </div>
  );
};
