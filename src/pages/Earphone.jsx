import EarphoneProducts from "../components/EarphoneProducts";
import EarphoneHeader from "../components/EarphoneHeader";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";

function Earphone() {
  const earphones = [
    {
      id: 1,
      name: "YX1 WIRELESS EARPHONES",
      description:
        "Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.",
      image: "/product-yx1-earphones/desktop/image-category-page-preview.jpg",
      isNew: true,
      slug: "/product/yx1-earphones",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <EarphoneHeader title="EARPHONES" />

      <div>
        {earphones.map((product, index) => (
          <EarphoneProducts
            key={product.id}
            product={product}
            reverseLayout={index % 2 !== 0}
          />
        ))}
      </div>

      <CategoryCards />
      <BestAudioGear />
      <Footer />
    </div>
  );
}

export default Earphone;
