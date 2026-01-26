import styles from "./App.module.css";
import Header from "./Header";
import Hero from "./Hero";
import CategoryCards from "./CategoryCards";
import ProductShowcase from "./ProductShowcase";
import BestAudioGear from "./BestAudioGear";
import Footer from "./Footer";
import Headphone from "../pages/Headphone";
import Speakers from "../pages/Speakers";
import Earphone from "../pages/Earphone";
import ProductDetailPage from "../pages/ProductDetailPage";
import XX99Mark1Headphone from "../pages/XX99Mark1Headphone";
import ScrollToTop from "./ScrollToTop";
import XX59Headphones from "../pages/XX59Headphones";
import ZX9Speaker from "../pages/ZX9Speaker";
import ZX7Speaker from "../pages/ZX7Speaker";
import Checkout from "./Checkout";
import { useCart } from "./Contexts/CartContext";
import YX1Earphone from "../pages/YX1Earphone";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const { cartItems } = useCart();
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          index
          path="/"
          element={
            <div className={`${styles.appContainer}`}>
              <Header />

              <Hero />
              <CategoryCards />
              <ProductShowcase />
              <BestAudioGear />
              <Footer />
            </div>
          }
        />

        <Route
          path="/headphones"
          element={
            <div>
              <Headphone />
            </div>
          }
        />
        <Route
          path="/speakers"
          element={
            <div>
              <Speakers />
            </div>
          }
        />
        <Route
          path="/earphones"
          element={
            <div>
              <Earphone />
            </div>
          }
        />
        <Route
          path="/product/xx99-mark-ii-headphones"
          element={<ProductDetailPage />}
        />
        <Route
          path="/product/xx99-mark-i-headphones"
          element={<XX99Mark1Headphone />}
        />
        <Route path="/product/xx59-headphones" element={<XX59Headphones />} />
        <Route path="/product/zx9-speaker" element={<ZX9Speaker />} />
        <Route path="/product/zx7-speaker" element={<ZX7Speaker />} />
        <Route path="/product/xx99-markk-i" element={<ProductDetailPage />} />
        <Route path="/product/xx59-headphones" element={<XX59Headphones />} />
        <Route path="/product/zx9-speaker" element={<ZX9Speaker />} />

        <Route
          path="/product/xx99-mark-i-headphones"
          element={<XX99Mark1Headphone />}
        />
        <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

        <Route path="/headphone" element={<Headphone />} />
        <Route path="/speaker" element={<Speakers />} />
        <Route path="/product/yx1-earphones" element={<YX1Earphone />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
