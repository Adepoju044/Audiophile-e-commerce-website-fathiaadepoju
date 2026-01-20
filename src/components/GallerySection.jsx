function ProductGallery() {
  return (
    <section className="container mx-auto px-6 md:px-12 lg:px-40 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div className="grid grid-rows-2 gap-6 md:gap-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
              alt="Gallery 1"
              className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src="/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
              alt="Gallery 2"
              className="w-full h-64 sm:h-72 md:h-64 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden">
          <img
            src="/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
            alt="Gallery 3"
            className="w-full h-64 sm:h-80 md:h-full lg:h-[605px] object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

export default ProductGallery;
