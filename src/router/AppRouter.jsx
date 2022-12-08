import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About";
import CardDetail from "../components/CardDetail";
import Contact from "../components/Contact";
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
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/product/:id" element={<CardDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
