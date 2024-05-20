import Logo from "../assets/img/logo.png";

export const Navbar = () => {
  return (
    <header className="bg-[#2ac965] px-4 py-8">
      <div className="max-w-screen-2xl mx-auto ">
        <img src={Logo} alt="" />
      </div>
    </header>
  );
};
