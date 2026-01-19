import Header from "../components/Header";
import ProductDetailMain from "../components/ProductDetailMain";
import Features from "../components/Features";
import ProductGallery from "../components/GallerySection";
import YouMayAlsoLike from "../components/MayAlsoLikeSection";
import CategoryCards from "../components/CategoryCards";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";

function ProductDetailPage() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <ProductDetailMain />
        <Features />
        <ProductGallery />
        <YouMayAlsoLike />
        <CategoryCards />
        <BestAudioGear />
        <Footer />
      </div>
    </>
  );
}
export default ProductDetailPage;
