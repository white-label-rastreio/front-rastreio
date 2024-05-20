import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:store" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
