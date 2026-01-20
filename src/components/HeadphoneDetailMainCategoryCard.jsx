function HeadphoneDetailMainCategoryCard() {
  const categories = [
    {
      name: "HEADPHONES",
      image: "/shared/desktop/image-category-thumbnail-headphones.png",
    },
    {
      name: "SPEAKERS",
      image: "/shared/desktop/image-category-thumbnail-speakers.png",
    },
    {
      name: "EARPHONES",
      image: "/shared/desktop/image-category-thumbnail-earphones.png",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-40">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-4 lg:gap-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-lg w-full max-w-sm relative group cursor-pointer transition-all duration-500 hover:transform hover:-translate-y-2"
          >
            <div className="flex flex-col items-center py-16 px-6 relative z-10">
              <img
                src={category.image}
                alt={category.name}
                className="w-50 -mt-24 group-hover:scale-110 transition-transform duration-500"
              />
              <h3 className="font-bold mt-4 tracking-widest text-lg">
                {category.name}
              </h3>
              <div className="flex items-center gap-2 mt-4 group-hover:text-orange-500 transition-colors duration-300">
                <span className="text-gray-500 tracking-widest text-sm font-bold hover:translate-x-1 transition-transform duration-300">
                  SHOP
                </span>
                <span className="text-orange-500 text-lg">→</span>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gray-100 rounded-lg -z-10"></div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeadphoneDetailMainCategoryCard;
