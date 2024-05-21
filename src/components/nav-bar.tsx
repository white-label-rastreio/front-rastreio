import { useEffect, useState } from "react";
import Logo from "../assets/img/logo.png";
import { StoreData } from "../types";
import { useParams } from "react-router-dom";
import { getStore } from "../actions/getStore";
import toast from "react-hot-toast";

export const Navbar = () => {
  const { store } = useParams();
  const [dataStore, setDataStore] = useState<StoreData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (store) {
        const storedData = localStorage.getItem("dataStore");
        if (storedData) {
          const parsedData = JSON.parse(storedData);
          if (parsedData.name === store) {
            setDataStore(parsedData);
            return;
          } else {
            localStorage.removeItem("dataStore");
          }
        }

        try {
          const data: StoreData = await getStore(store);
          setDataStore(data);
          localStorage.setItem("dataStore", JSON.stringify(data));
        } catch (error) {
          toast.error("Store does not exist");
        }
      } else {
        setDataStore(null);
      }
    };

    fetchData();
  }, [store]);

  return (
    <nav
      style={{
        backgroundColor: dataStore?.cor_principal
          ? dataStore.cor_principal
          : "#2ac965",
      }}
      className="px-4 py-8"
    >
      <div className="max-w-screen-2xl mx-auto ">
        <div className="relative w-[200px] h-[70px]">
          <img
            src={dataStore?.logo ? dataStore.logo : Logo}
            alt="Logo"
            className="absolute object-cover
             w-full h-full"
          />
        </div>
      </div>
    </nav>
  );
};
