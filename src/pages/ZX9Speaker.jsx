import CategoryCards from "../components/CategoryCards.jsx";
import Header from "../components/Header.jsx";
import ZX9SpeakerDetailMain from "../components/ZX9SpeakerDetailMain.jsx";
import ZX9SpeakerDetailMainFeatures from "../components/Zx9SpeakerDetailMainFeatures.jsx";
import ZX9SpeakerDetailMainGallerySection from "../components/ZX9SpeakerDetailMainGallerySection.jsx";
import ZX9SpeakerDetailMainMayAlsoLikeSection from "../components/ZX9SpeakerDetailMainMayAlsoLikeSection.jsx";
import BestAudioGear from "../components/BestAudioGear.jsx";
import Footer from "../components/Footer.jsx";

function ZX9Speaker() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <ZX9SpeakerDetailMain />
        <ZX9SpeakerDetailMainFeatures />
        <ZX9SpeakerDetailMainGallerySection />
        <ZX9SpeakerDetailMainMayAlsoLikeSection />
        <CategoryCards />
        <BestAudioGear />
        <Footer />
      </div>
    </>
  );
}
export default ZX9Speaker;
