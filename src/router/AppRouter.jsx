import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetail from "../components/CardDetail";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Products from "../components/Products";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
