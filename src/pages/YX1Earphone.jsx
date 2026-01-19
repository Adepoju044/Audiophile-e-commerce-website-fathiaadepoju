import Header from "../components/Header.jsx";
import YX1EarphoneDetailMain from "../components/YX1EarphoneDetailMain.jsx";
import YX1EarphoneMainFeatures from "../components/YX1EarphoneMainFeatures.jsx";
import YX1EarphoneDetailMainGallerySection from "../components/YX1EarphoneDetailMainGallerySection.jsx";
import YX1EarphoneDetailMainYouMayAlsoLikeSection from "../components/YX1EarphoneDetailMainYouMayAlsoLikeSection.jsx";
import CategoryCards from "../components/CategoryCards.jsx";
import BestAudioGear from "../components/BestAudioGear.jsx";
import Footer from "../components/Footer.jsx";

function YX1Earphone() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>

      <main className="min-h-screen bg-white">
        <YX1EarphoneDetailMain />
        <YX1EarphoneMainFeatures />
        <YX1EarphoneDetailMainGallerySection />
        <YX1EarphoneDetailMainYouMayAlsoLikeSection />
        <CategoryCards />
        <BestAudioGear />
        <Footer />
      </main>
    </>
  );
}

export default YX1Earphone;
