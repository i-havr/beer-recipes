import { Routes, Route } from "react-router-dom";
import { lazy } from "react";

import Layout from "../Layout/Layout";

const Home = lazy(() => import("../../pages/Home/Home3"));
const BeerRecipe = lazy(() => import("../../pages/BeerRecipe/BeerRecipe"));

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:beerId" element={<BeerRecipe />} />

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
