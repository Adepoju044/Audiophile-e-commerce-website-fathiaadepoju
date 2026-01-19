import SpeakerProducts from "../components/SpeakerProducts";
import SpeakerHeader from "../components/SpeakerHeader";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";

function Speakers() {
  const speakers = [
    {
      id: 1,
      name: "zx9 speaker",
      description:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
      image:
        "src/public/assets/product-zx9-speaker/desktop/image-category-page-preview.jpg",
      isNew: true,
      slug: "/product/zx9-speaker",
    },
    {
      id: 2,
      name: "zx7 speaker",
      description:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
      image:
        "src/public/assets/product-zx7-speaker/desktop/image-category-page-preview.jpg",
      isNew: false,
      slug: "/product/zx7-speaker",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SpeakerHeader title="SPEAKERS" />

      <div>
        {speakers.map((product, index) => (
          <SpeakerProducts
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

export default Speakers;
