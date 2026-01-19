function HeadphoneDetailMainFeatures() {
  return (
    <section className="container mx-auto px-6 md:px-40 py-20">
      <div className="grid md:grid-cols-2 gap-20 md:gap-32">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-8">Features</h2>
          <div className="text-gray-600 space-y-6 mb-12 md:mb-0">
            <p className=" w-full">
              These headphones have been created from durable, high-quality
              materials tough enough to take anywhere. Its compact folding
              design fuses comfort and minimalist style making it perfect for
              travel. Flawless transmission is assured by the latest wireless
              technology engineered for audio synchronization with videos.
            </p>
            <p>
              More than a simple pair of headphones, this headset features a
              pair of built-in microphones for clear, hands-free calling when
              paired with a compatible smartphone. Controlling music and calls
              is also intuitive thanks to easy-access touch buttons on the
              earcups. Regardless of how you use the XX59 headphones, you can do
              so all day thanks to an impressive 30-hour battery life that can
              be rapidly recharged via USB-C.
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
