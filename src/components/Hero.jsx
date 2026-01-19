import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative text-white h-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between lg:px-6 md:px-45 py-38 md:text-center">
        <div className="max-w-md space-y-6 text-center lg:text-left z-10">
          <p className="tracking-[0.5em] text-gray-400 text-sm">NEW PRODUCT</p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>

          <p className="text-gray-400 text-base leading-relaxed">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <button
            onClick={() => navigate("/productdetailpage")}
            className="bg-transparent border border-orange-500 hover:bg-orange-600 px-8 py-4 text-white uppercase tracking-widest text-sm font-bold transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            SEE PRODUCT
          </button>
        </div>

        <div className="hidden md:block md:w-1/2" />
      </div>
    </section>
  );
}

export default Hero;
