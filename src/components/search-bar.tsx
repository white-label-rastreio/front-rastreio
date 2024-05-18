import { Search } from "lucide-react";

export const SearchBar = () => {
  const handleSubmit = async () => {};

  return (
    <form className="gap-4 mt-12 relative " onSubmit={handleSubmit}>
      <input
        type="text"
        value=""
        onChange={() => {}}
        placeholder="Enter product link"
        className="flex-1 min-w-[200px] w-full p-3 border rounded-lg shadow-xl text-base text-secondary focus:outline-none relative"
      />

      <button className="absolute right-0 top-0 bg-[#14d7bf] h-full w-[100px]  flex items-center justify-center rounded-l-none">
        <Search className="h-7 w-7 " />
      </button>
    </form>
  );
};
