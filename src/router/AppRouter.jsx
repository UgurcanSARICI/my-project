import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About";
import CardDetail from "../components/CardDetail";
import Contact from "../components/Contact";
import Faq from "../components/Faq";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Why from "../components/Why";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<CardDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/why" element={<Why />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
