import CTA from "./Component/CTA";
import ExtraAddoOn from "./Component/ExtraAddoOn";
import FAQ from "./Component/FAQ.jsx";
import Features from "./Component/Feature";
import FeatureRankOverview from "./Component/FeatureRankOverview";
import HeroWrapper from "./Component/HeroWrapper";
import Marquee from "./Component/Marquee";
import MarqueeSecond from "./Component/MarqueeSecond";
import Navbar from "./Component/NavBar";
import PlanAndPricing from "./Component/PlanAndPricing";
import TopBanner from "./Component/TopBanner";

function App() {
  return (
    <div className="main">
      <TopBanner />

      <Navbar />

      <HeroWrapper />

      <Features />

      <FeatureRankOverview />

      <PlanAndPricing />

      <ExtraAddoOn />

      <FAQ />

      <Marquee />

      <MarqueeSecond />

      <CTA />
    </div>
  );
}

export default App;
