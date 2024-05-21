import { useEffect, useState } from "react";
import { DataPostagem, StoreData } from "../../types";
import { RastreioCard } from "../../components/rastreio-card";
import { InteractionCard } from "../../components/interaction-card";
import { MoveDown } from "lucide-react";
import { useParams } from "react-router-dom";
import { getStore } from "../../actions/getStore";
import toast from "react-hot-toast";

export const RastreioPage = () => {
  const { store } = useParams();
  const [data, setData] = useState<DataPostagem | null>(null);
  const [dataStore, setDataStore] = useState<StoreData | null>(null);

  useEffect(() => {
    const savedPostagemData = localStorage.getItem("postagemData");
    if (savedPostagemData) {
      setData(JSON.parse(savedPostagemData));
    }

    const savedStoreData = localStorage.getItem("dataStore");
    const savedStore = localStorage.getItem("currentStore");

    if (savedStoreData && savedStore === store) {
      setDataStore(JSON.parse(savedStoreData));
    } else if (store) {
      const fetchStoreData = async () => {
        try {
          const data: StoreData = await getStore(store);
          setDataStore(data);
          localStorage.setItem("dataStore", JSON.stringify(data));
          localStorage.setItem("currentStore", store);
        } catch (error) {
          toast.error("Store does not exist");
        }
      };
      fetchStoreData();
    }
  }, [store]);

  return (
    <div className="py-20 w-full min-h-screen px-4 max-w-screen-2xl mx-auto ">
      <div className="flex  flex-col text-black">
        <RastreioCard data={data} primaryColor={dataStore?.cor_principal} />
        <div className="flex items-center gap-3 py-9 justify-center">
          <h1 className=" text-2xl font-extrabold lg:text-5xl flex-nowrap">
            Status do pedido:
          </h1>
          <MoveDown
            size={40}
            style={{
              color: dataStore?.cor_principal
                ? dataStore.cor_principal
                : "#2ac965",
            }}
          />
        </div>
        <div className="py-10 grid grid-cols-1 lg:grid-cols-2 gap-5">
          {data?.interacoesPedido.map((interaction, index) => (
            <InteractionCard
              data={interaction}
              key={index}
              primaryColor={dataStore?.cor_principal}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
