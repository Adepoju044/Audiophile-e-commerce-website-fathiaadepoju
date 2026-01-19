function HeadphoneDetailMainFeatures() {
  return (
    <section className="container mx-auto px-6 md:px-40 py-20">
      <div className="grid md:grid-cols-2 gap-20 md:gap-32">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-8">Features</h2>
          <div className="text-gray-600 space-y-6 mb-12 md:mb-0">
            <p className=" w-full">
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p>
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is includes with a
              balanced gold connector.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold uppercase mb-9">In the Box</h2>
          <ul className="space-y-2 mb-9">
            <li className="flex items-center gap-6 mb-5">
              <span className="text-orange-500 font-bold">1x</span>
              <span className="text-gray-500">Headphone Unit</span>
            </li>
            <li className="flex items-center gap-6 mb-5">
              <span className="text-orange-500 font-bold">2x</span>
              <span className="text-gray-500">Replacement Earcups</span>
            </li>
            <li className="flex items-center gap-6 mb-5">
              <span className="text-orange-500 font-bold">1x</span>
              <span className="text-gray-500">User Manual</span>
            </li>
            <li className="flex items-center gap-6 mb-5">
              <span className="text-orange-500 font-bold">1x</span>
              <span className="text-gray-500">3.5mm 5m Audio Cable</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default HeadphoneDetailMainFeatures;
