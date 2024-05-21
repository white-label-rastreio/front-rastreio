import { InteracoesPedido } from "../types";
import CardImage from "../assets/img/movimento-gray.png";

interface InteractionCardProps {
  data: InteracoesPedido;
  primaryColor?: string;
}

export const InteractionCard = ({
  data,
  primaryColor,
}: InteractionCardProps) => {
  return (
    <div className="border rounded-md p-4 lg:p-7 bg-white shadow-lg">
      <div className="flex gap-4 flex-row justify-between mb-4 text-gray-700">
        <p className="text-lg font-medium">{data.data}</p>
        <span className="text-lg font-medium">{data.hora}</span>
      </div>
      <div className="flex flex-col gap-2 md:gap-7 lg:flex-row justify-between items-center">
        <img src={CardImage} width={50} height={50} />
        <p
          style={{ color: primaryColor ? primaryColor : "#2ac965" }}
          className=" text-md"
        >
          {data.descricao}
        </p>
      </div>
    </div>
  );
};
