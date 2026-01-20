function XX59HeadphoneDetailMainGallerySection() {
  return (
    <section className="container mx-auto px-6 md:px-40 py-20">
      <div className="grid md:grid-cols-2 w-full gap-8">
        <div className="space-y-8">
          <div className="bg-gray-100 rounded-lg overflow-hidden group md:h-[280px] md:w-[500px]">
            <img
              src="/product-xx59-headphones/desktop/image-gallery-1.jpg"
              alt="Gallery 1"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="bg-gray-100 rounded-lg overflow-hidden group md:h-[280px] md:w-[500px]">
            <img
              src="/product-xx59-headphones/desktop/image-gallery-2.jpg"
              alt="Gallery 2"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg overflow-hidden group md:h-[590px]">
          <img
            src="/product-xx59-headphones/desktop/image-gallery-3.jpg"
            alt="Gallery 3"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
export default XX59HeadphoneDetailMainGallerySection;
