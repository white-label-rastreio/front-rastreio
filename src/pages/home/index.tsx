//@ts-nocheck
import { Header } from "../../components/header";
import { HomeCard } from "../../components/home-card";
import CodeImage from "../../assets/img/codigo.png";
import TrackingImage from "../../assets/img/rastreamento.png";
import { Footer } from "../../components/footer";
import React from "react";
import { useParams } from "react-router-dom";

const Home = () => {
  const [config, setConfig] = React.useState({});

  const { store } = useParams();

  React.useEffect(() => {
    (async () => {
      if (store) {
        const response = await fetch(
          `https://api.rastreou.org/postagem/${store}/distribuidora`
        );
        const data = await response.json();

        setConfig(data);
      }
    })();
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <Header
        image={config?.logo ? config?.logo : CodeImage}
        title={config?.title ? config?.title : "Rastreamento"}
        description={
          config?.description
            ? config?.description
            : "Acompanhe em tempo real o status de entrega dos seus pacotes, saiba onde eles estão e esteja sempre um passo à frente"
        }
        primaryColor={config?.cor_principal ? config?.cor_principal : "#2ac965"}
        secondaryColor={
          config?.secondaryColor ? config?.secondaryColor : "#787878"
        }
      />
      <section className="max-w-screen-2xl mx-auto py-20 px-4">
        <div className="flex flex-col lg:flex-row gap-5">
          <HomeCard
            image={CodeImage}
            title="Rastreamento"
            description="Acompanhe em tempo real o status de entrega dos seus pacotes, saiba onde eles estão e esteja sempre um passo à frente"
          />
          <HomeCard
            image={TrackingImage}
            title="
            Como rastrear um objeto?"
            description="Basta informar o código recebido por seu vendedor e/ou loja. Exemplo:"
            code="PQ436222813BR"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
