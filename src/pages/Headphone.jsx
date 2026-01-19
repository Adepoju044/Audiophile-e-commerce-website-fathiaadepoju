import PageHeader from "../components/PageHeader";
import ProductSection from "../components/ProductSection";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";
import HeadphoneDetailMain from "../components/HeadphoneDetailMain";

function Headphone() {
  const headphones = [
    {
      id: 1,
      name: "XX99 MARK II HEADPHONES",
      description:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
      image:
        "src/public/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg",
      isNew: true,
      slug: "/product/xx99",
      price: 2999,
    },
    {
      id: 2,
      name: "XX99 MARK I HEADPHONES",
      description:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
      image:
        "src/public/assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg",
      isNew: false,
      slug: "/product/xx99-mark-i",
      price: 1750,
    },
    {
      id: 3,
      name: "XX59 HEADPHONES",
      description:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
      image:
        "src/public/assets/product-xx59-headphones/desktop/image-category-page-preview.jpg",
      isNew: false,
      slug: "/product/xx59",
      price: 899,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <PageHeader title="HEADPHONES" />

      <div>
        {headphones.map((product, index) => (
          <>
            <ProductSection
              key={product.id}
              product={product}
              reverseLayout={index % 2 !== 0}
            />
          </>
        ))}
      </div>

      <CategoryCards />
      <BestAudioGear />
      <Footer />
    </div>
  );
}

export default Headphone;
