import Header from "../components/Header";
import HeadphoneDetailMain from "../components/HeadphoneDetailMain";
import HeadphoneDetailMainFeatures from "../components/HeadphoneDetailMainFeatures";
import HeadphoneDetailMainGallerySection from "../components/HeadphoneDetailMainGallerySection";
import HeadphoneDetailMainMayAlsoLikeSection from "../components/HeadphoneDetailMainMayAlsoLikeSection";
import HeadphoneDetailMainCategoryCard from "../components/HeadphoneDetailMainCategoryCard";
import BestAudioGear from "../components/BestAudioGear";
import Footer from "../components/Footer";

function XX99Mark1Headphone() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <HeadphoneDetailMain />
        <HeadphoneDetailMainFeatures />
        <HeadphoneDetailMainGallerySection />
        <HeadphoneDetailMainMayAlsoLikeSection />
        <HeadphoneDetailMainCategoryCard />
        <BestAudioGear />
        <Footer />
      </div>
    </>
  );
}
export default XX99Mark1Headphone;
