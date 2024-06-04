import { useEffect, useState } from "react";
import { DataPostagem, StoreData } from "../../types";
import { RastreioCard } from "../../components/rastreio-card";
import { InteractionCard } from "../../components/interaction-card";
import { MoveDown } from "lucide-react";
import { useParams } from "react-router-dom";
import { getStore } from "../../actions/getStore";
import toast from "react-hot-toast";
import { getPostagem } from "../../actions/getPostagem";

export const RastreioPage = () => {
  const { store, id } = useParams();
  const [data, setData] = useState<DataPostagem | null>(null);
  const [dataStore, setDataStore] = useState<StoreData | null>(null);
  const [invalidCode, setInvalidCode] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedStoreData = localStorage.getItem("dataStore");
        const savedStore = localStorage.getItem("currentStore");

        if (savedStoreData && savedStore === store) {
          setDataStore(JSON.parse(savedStoreData));
        } else if (store) {
          const storeData: StoreData = await getStore(store);
          setDataStore(storeData);
          localStorage.setItem("dataStore", JSON.stringify(storeData));
          localStorage.setItem("currentStore", store);
        }

        if (id) {
          const postData: DataPostagem = await getPostagem(id);
          setData(postData);
        } else {
          setInvalidCode(true);
        }
      } catch (error) {
        toast.error("Erro ao buscar dados da postagem ou loja");
      }
    };

    fetchData();
  }, [store, id]);

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
        {invalidCode && (
          <p className="text-center text-red-500 mt-4 text-3xl">
            Por favor, insira um código de rastreio válido.
          </p>
        )}
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
