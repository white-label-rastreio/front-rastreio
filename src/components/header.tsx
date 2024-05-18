import Logo from "../assets/img/logo.png";
import HomeImage from "../assets/img/home-image.png";
import HomeTextImage from "../assets/img/text-home.svg";
import { SearchBar } from "./search-bar";

export const Header = () => {
  return (
    <header className="bg-[#2ac965] px-4 py-8">
      <div className="max-w-screen-2xl mx-auto ">
        <img src={Logo} alt="" />

        <div className="flex max-lg:flex-col gap-16 ">
          <div className="flex flex-col justify-center">
            <img src={HomeTextImage} alt="Text header image" width={500} />
            <h1 className="mt-4 text-4xl lg:text-2xl  lg:md:text-2xl max-w-fit font-bold tracking-[1.2px] text-secondary">
              Simplifique a sua experiência de rastreamento com o nosso serviço
              confiável e fácil de usar.
            </h1>
            <img
              src={HomeImage}
              alt="home image"
              width={384}
              height={300}
              className=" lg:hidden mt-10"
            />
            <SearchBar />
          </div>
          <img
            src={HomeImage}
            alt="home image"
            width={484}
            height={300}
            className="max-lg:self-center max-lg:hidden"
          />
        </div>
      </div>
    </header>
  );
};
