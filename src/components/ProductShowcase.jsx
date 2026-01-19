import styles from "./ProductShowcase.module.css";
import { useNavigate } from "react-router-dom";

function ProductShowcase({ slug }) {
  const navigate = useNavigate();
  return (
    <>
      <section
        className="relative bg-orange-500 rounded-lg mx-5 md:mx-16 
      
      lg:mx-40 mt-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[url('src/public/assets/home/desktop/pattern-circles.svg')] bg-no-repeat bg-left opacity-20 scale-[2] md:scale-125"></div>

        <div className="relative z-10 flex flex-col md:flex-col lg:flex-row items-center justify-between px-10 py-20">
          <div className="relative flex justify-center md:block">
            <img
              src="/src/public/assets/home/desktop/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="hidden md:block w-[380px] transform hover:scale-105 transition duration-500"
            />

            <img
              src="/src/public/assets/home/mobile/image-speaker-zx9.png"
              alt="ZX9 Speaker"
              className="md:hidden w-56 transform hover:scale-105 transition duration-500"
            />
          </div>

          <div className="text-white text-center md:text-center lg:text-left max-w-md mt-10 md:mt-0">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              ZX9 SPEAKER
            </h2>

            <p className="text-white/90 mt-6 mb-8 text-lg leading-relaxed lg:w-[65%]">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>

            <button
              className="bg-black hover:bg-gray-700 px-8 py-4 uppercase tracking-widest text-sm font-bold transition-all duration-300 cursor-pointer transform hover:scale-105"
              onClick={() => navigate("/product/zx9-speaker")}
            >
              See Product
            </button>
          </div>
        </div>
      </section>

      <section className="relative mx-6 md:mx-16 lg:mx-40 my-16 rounded-lg overflow-hidden group">
        <div className={styles.zx7}></div>

        <div className="absolute inset-0 flex items-center px-10 md:px-20">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
            <button
              className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-bold hover:bg-black hover:text-white transition-all duration-300 transform group-hover:scale-105 hover:cursor-pointer"
              onClick={() => navigate("/product/zx7-speaker")}
            >
              See Product
            </button>
          </div>
        </div>
      </section>
      <section className="mx-6 md:mx-16 lg:mx-40 my-20">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-lg overflow-hidden group">
            <img
              src="/src/public/assets/home/desktop/image-earphones-yx1.jpg"
              alt="YX1 Earphones"
              className="w-full h-80 object-cover rounded-lg transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="bg-gray-100 rounded-lg flex flex-col justify-center py-12 px-12 md:py-16 group hover:bg-gray-200 transition-all duration-300">
            <h2 className="text-3xl font-bold mb-8">YX1 EARPHONES</h2>
            <button
              className="border border-black px-8 py-4 uppercase tracking-widest text-sm font-bold w-48 hover:bg-black hover:text-white transition-all duration-300 transform group-hover:scale-105 hover:cursor-pointer"
              onClick={() => navigate("/product/yx1-earphones")}
            >
              See Product
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductShowcase;
