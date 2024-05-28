import { HomeCard } from "../../components/home-card";
import CodeImage from "../../assets/img/codigo.png";
import TrackingImage from "../../assets/img/rastreamento.png";

import { Header } from "../../components/header";
import { useEffect, useState } from "react";
import { getStore } from "../../actions/getStore";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { StoreData } from "../../types";

const Home = () => {
  const { store } = useParams();
  const [dataStore, setDataStore] = useState<StoreData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (store) {
        try {
          const data: StoreData = await getStore(store);
          setDataStore(data);
          localStorage.setItem("dataStore", JSON.stringify(data));
        } catch (error) {
          toast.error("Store does not exist");
        }
      }
    };
    fetchData();
  }, [store]);

  return (
    <div className="flex flex-col ">
      <section>
        <Header
          description={
            dataStore?.description
              ? dataStore?.description
              : "Acompanhe em tempo real o status de entrega dos seus pacotes, saiba onde eles estão e esteja sempre um passo à frente"
          }
          primaryColor={
            dataStore?.cor_principal ? dataStore?.cor_principal : "#2ac965"
          }
        />
      </section>
      <section className="flex flex-col lg:flex-row gap-5 py-24 max-w-screen-2xl mx-auto  px-4">
        <HomeCard
          primaryColor={dataStore?.cor_principal}
          secondaryColor={dataStore?.cor_secundaria}
          image={CodeImage}
          title="Rastreamento"
          description="Acompanhe em tempo real o status de entrega dos seus pacotes, saiba onde eles estão e esteja sempre um passo à frente"
        />
        <HomeCard
          primaryColor={dataStore?.cor_principal}
          secondaryColor={dataStore?.cor_secundaria}
          image={TrackingImage}
          title="
            Como rastrear um objeto?"
          description="Basta informar o código recebido por seu vendedor e/ou loja. Exemplo:"
          code="PQ436222813BR"
        />
      </section>
    </div>
  );
};

export default Home;
