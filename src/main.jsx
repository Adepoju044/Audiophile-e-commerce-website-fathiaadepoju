import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App.jsx";
import { CartProvider } from "./components/Contexts/CartContext.jsx";

createRoot(document.getElementById("root")).render(
  <CartProvider>
    <App />
  </CartProvider>
);
