import BestAudioGear from "../components/BestAudioGear.jsx";
import CategoryCards from "../components/CategoryCards.jsx";
import Footer from "../components/Footer.jsx";
import Header from "../components/Header.jsx";
import ZX7SpeakerDetailMain from "../components/ZX7SpeakerDetailMain.jsx";
import ZX7SpeakerDetailMainFeatures from "../components/ZX7SpeakerDetailMainFeatures.jsx";
import ZX7SpeakerDetailMainGallerySection from "../components/ZX7SpeakerDetailMainGallerySection.jsx";
import ZX7SpeakerDetailMainMayAlsoLikeSection from "../components/ZX7SpeakerDetailMainMayAlsoLikeSection.jsx";

function ZX7Speaker() {
  return (
    <>
      <div className="bg-black">
        <Header />
      </div>
      <div className="min-h-screen bg-white">
        <ZX7SpeakerDetailMain />
        <ZX7SpeakerDetailMainFeatures />
        <ZX7SpeakerDetailMainGallerySection />
        <ZX7SpeakerDetailMainMayAlsoLikeSection />
        <CategoryCards />
        <BestAudioGear />
        <Footer />
      </div>
    </>
  );
}
export default ZX7Speaker;
