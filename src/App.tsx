import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";

import Layout from "./pages/layout";
import { RastreioPage } from "./pages/rastreio";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="rastreio/:id" element={<RastreioPage />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
