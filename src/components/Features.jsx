function Features() {
  return (
    <section className="container mx-auto px-6 md:px-20 lg:px-40 py-20">
      <div className="grid lg:grid-cols-2  md:grid-cols-1 gap-20 md:gap-32">
        <div>
          <h2 className="text-2xl font-bold uppercase mb-8">Features</h2>
          <div className="text-gray-600 space-y-6">
            <p className=" w-full">
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5.0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
        </div>
        <div>
          <div className="grid lg:grid-cols-1 md:grid-cols-2 ">
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
              <li className="flex items-center gap-6 mb-5">
                <span className="text-orange-500 font-bold">1x</span>
                <span className="text-gray-500">Travel Bag</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Features;
