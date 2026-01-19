import { useNavigate } from "react-router-dom";

function SpeakerProducts({ product, reverseLayout = false }) {
  const { image, isNew, name, description, slug } = product;
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-8 md:px-12 py-6 md:py-20">
      <div
        className={`flex flex-col ${
          reverseLayout ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-center gap-20`}
      >
        <div className="w-full lg:w-1/2 bg-[#F1F1F1] rounded-lg overflow-hidden p-12 flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-full h-auto object-contain"
          />
        </div>
        <div className="lg:w-1/2 text-center lg:text-left max-w-md">
          {isNew && (
            <span className="text-orange-400 text-sm tracking-[0.5em] font-light mb-4 block ">
              NEW PRODUCT
            </span>
          )}
          <h2 className="text-2xl md:text-5xl md:font-bold uppercase mb-8 whitespace-nowrap md:whitespace-normal">
            {name}
          </h2>
          <p className="text-gray-500 mb-10 leading-relaxed ">{description}</p>
          <button
            className="bg-orange-500 hover:bg-orange-300 text-white px-8 py-4 uppercase tracking-widest text-sm font-bold transition-colors mb-16 md:mb-0 cursor-pointer"
            onClick={() => navigate(slug)}
          >
            SEE PRODUCT
          </button>
        </div>
      </div>
    </section>
  );
}
export default SpeakerProducts;
