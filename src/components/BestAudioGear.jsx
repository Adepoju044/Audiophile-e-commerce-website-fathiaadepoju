function BestAudioGear() {
  return (
    <section className="mx-6 md:mx-40 my-32">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="order-1 md:order-1 lg:order-2 rounded-lg overflow-hidden group">
          <img
            src="/shared/desktop/image-best-gear.jpg"
            alt="Best Audio Gear"
            className="hidden lg:block w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500 h-[550px] object-cover"
          />
          <img
            src="/shared/tablet/image-best-gear.jpg"
            alt="Best Audio Gear"
            className="block md:block lg:hidden w-full rounded-lg transform group-hover:scale-105 transition-transform duration-500 h-[300px] md:h-[520px] object-cover"
          />
        </div>

        <div className="text-center md:text-center lg:text-left space-y-8 order-2 md:order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight lg:hidden">
            Bringing you the <span className="text-orange-500">best</span> audio
            gear
          </h2>
          <h2 className="text-4xl font-bold uppercase hidden leading-tight lg:block md:hidden">
            Bringing you the
            <br /> <span className="text-orange-500">best</span> audio gear
          </h2>
          <p className="text-gray-600 text-md leading-relaxed md:w-full lg:w-[82%]">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BestAudioGear;
