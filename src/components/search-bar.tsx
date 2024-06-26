import { Search } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "../hooks/use-debounce";
import { getPostagem } from "../actions/getPostagem";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { DataPostagem, StoreData } from "../types";

export const SearchBar = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);
  const navigate = useNavigate();
  const { store } = useParams();

  const handleSubmit = async () => {
    try {
      const storedStore = localStorage.getItem("dataStore");

      if (!store) {
        localStorage.removeItem("dataStore");
        const data: DataPostagem = await getPostagem(debouncedValue);
        localStorage.setItem("postagemData", JSON.stringify(data));
        navigate(`/rastreio/${data.codigoRastreio}`);
        return;
      }

      if (!storedStore) {
        const data: DataPostagem = await getPostagem(debouncedValue);
        localStorage.setItem("postagemData", JSON.stringify(data));
        navigate(`/rastreio/${data.codigoRastreio}`);
        return;
      }

      const storedDataStore: StoreData = JSON.parse(storedStore);

      if (storedDataStore.name !== store) {
        localStorage.removeItem("dataStore");
        const data: DataPostagem = await getPostagem(debouncedValue);
        localStorage.setItem("postagemData", JSON.stringify(data));
        navigate(`/rastreio/${data.codigoRastreio}`);
        return;
      }

      const data: DataPostagem = await getPostagem(debouncedValue);
      localStorage.setItem("postagemData", JSON.stringify(data));
      navigate(`/${store}/rastreio/${data.codigoRastreio}`);
    } catch (error) {
      toast.error("Esse código não é válido!");
    }
  };

  return (
    <div className="gap-4 mt-12 relative">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter product link"
        className="flex-1 min-w-[200px] w-full p-3 border rounded-lg shadow-xl text-base text-secondary focus:outline-none relative text-black"
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="absolute right-0 top-0 bg-[#14d7bf] h-full w-[100px]  flex items-center justify-center rounded-l-none"
      >
        <Search className="h-7 w-7" />
      </button>
    </div>
  );
};
