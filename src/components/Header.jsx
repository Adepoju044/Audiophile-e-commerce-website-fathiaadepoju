import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import CartOverlay from "../components/CartLayout";
import { useCart } from "./Contexts/CartContext";
import CategoryCards from "../components/CategoryCards";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <header className="relative">
      <div className="flex justify-between items-center p-4 md:p-6 lg:px-40 w-full">
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <img
            src={
              isMenuOpen
                ? "/assets/shared/tablet/icon-menu-close.svg"
                : "/assets/shared/tablet/icon-menu.svg"
            }
            alt="Menu"
            className="w-5"
          />
        </button>

        <NavLink
          to="/"
          className="text-white font-extrabold text-2xl md:text-3xl"
        >
          audiophile
        </NavLink>

        <nav className="hidden md:flex flex-1 justify-center text-white gap-8 font-bold tracking-widest">
          {["/", "/headphones", "/speakers", "/earphones"].map((path, i) => (
            <NavLink key={i} to={path} className="group relative">
              <span className="group-hover:text-orange-500">
                {path === "/" ? "HOME" : path.replace("/", "").toUpperCase()}
              </span>
              <span className="absolute -bottom-6 left-0 w-0 h-1 bg-orange-500 transition-all group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        <div className="relative cursor-pointer">
          <img
            src="/public/assets/cart/shopping-cart.png"
            alt="cart"
            className="w-6 filter invert"
            onClick={() => setIsOpen((prev) => !prev)}
          />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-orange-500 text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </div>

      <div className="border-b border-white/20 mx-6 md:mx-12 lg:mx-40" />

      {isOpen && <CartOverlay onClose={() => setIsOpen(false)} />}

      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden animate-fadeIn"
            onClick={() => setIsMenuOpen(false)}
          />

          <div
            className="
        fixed top-[72px] left-0 w-full bg-white z-50 md:hidden
        max-h-[calc(100vh-72px)]
        overflow-y-auto
        animate-slideDown
      "
          >
            <CategoryCards onClose={() => setIsMenuOpen(false)} />
          </div>
        </>
      )}
    </header>
  );
}

export default Header;
