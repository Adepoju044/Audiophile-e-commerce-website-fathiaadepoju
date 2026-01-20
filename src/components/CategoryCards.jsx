import { Link } from "react-router-dom";

function CategoryCards() {
  const categories = [
    {
      name: "HEADPHONES",
      image: "/shared/desktop/image-category-thumbnail-headphones.png",
      link: "/headphones",
    },
    {
      name: "SPEAKERS",
      image: "/shared/desktop/image-category-thumbnail-speakers.png",
      link: "/speakers",
    },
    {
      name: "EARPHONES",
      image: "/shared/desktop/image-category-thumbnail-earphones.png",
      link: "/earphones",
    },
  ];

  return (
    <section className="bg-white py-25 px-6 md:px-12  lg:px-40 lg:mt-35">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-6 lg:gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg w-full max-w-xs sm:max-w-sm relative group cursor-pointer transition-transform duration-500 hover:-translate-y-2"
          >
            <div className="flex flex-col items-center py-16 px-6 relative z-10">
              <Link to={category.link}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-28 sm:w-32 md:w-36 -mt-24 group-hover:scale-110 transition-transform duration-500"
                />
              </Link>
              <h3 className="font-bold mt-4 tracking-widest text-lg sm:text-xl">
                {category.name}
              </h3>
              <Link to={category.link}>
                <div className="flex items-center gap-2 mt-4 group-hover:text-orange-500 transition-colors duration-300">
                  <span className="text-gray-500 tracking-widest text-sm font-bold group-hover:translate-x-1 transition-transform duration-300 hover:text-orange-400">
                    SHOP
                  </span>
                  <span className="text-orange-500 text-lg">→</span>
                </div>
              </Link>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gray-100 rounded-lg -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoryCards;
