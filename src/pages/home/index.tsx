import { Header } from "../../components/header";
import { HomeCard } from "../../components/home-card";
import CodeImage from "../../assets/img/codigo.png";
import TrackingImage from "../../assets/img/rastreamento.png";
import { Footer } from "../../components/footer";

const Home = () => {
  return (
    <div className="flex h-screen flex-col">
      <Header />
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
