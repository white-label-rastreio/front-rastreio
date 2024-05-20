import { useEffect, useState } from "react";
import { DataPostagem } from "../../types";
import { RastreioCard } from "../../components/rastreio-card";
import { InteractionCard } from "../../components/interaction-card";
import { MoveDown } from "lucide-react";

export const RastreioPage = () => {
  const [data, setData] = useState<DataPostagem | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("postagemData");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="py-20 w-full min-h-screen px-4 max-w-screen-2xl mx-auto ">
      <div className="flex  flex-col text-black">
        <RastreioCard data={data} />
        <div className="flex items-center gap-3 py-9 justify-center">
          <h1 className=" text-2xl font-extrabold lg:text-5xl flex-nowrap">
            Status do pedido:
          </h1>
          <MoveDown size={40} className="text-[#2ac965]" />
        </div>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data?.interacoesPedido.map((interaction, index) => (
            <InteractionCard data={interaction} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};
