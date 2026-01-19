import BestAudioGear from "../components/BestAudioGear";
import CategoryCards from "../components/CategoryCards";
import Footer from "../components/Footer";
import Header from "../components/Header";
import XX59HeadphoneDetailMain from "../components/XX59HeadphoneDetailMain";
import XX59HeadphoneDetailMainFeatures from "../components/XX59HeadphoneDetailMainFeatures";
import XX59HeadphoneDetailMainGallerySection from "../components/XX59HeadphoneDetailMainGallerySection";
import XX59HeadphoneDetailMainMayAlsoLikeSection from "../components/XX59HeadphoneDetailMainMayAlsoLikeSection";

function XX99Mark1Headphone() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <XX59HeadphoneDetailMain />
        <XX59HeadphoneDetailMainFeatures />
        <XX59HeadphoneDetailMainGallerySection />
        <XX59HeadphoneDetailMainMayAlsoLikeSection />
        <CategoryCards />
        <BestAudioGear />
        <Footer />
      </div>
    </>
  );
}
export default XX99Mark1Headphone;
