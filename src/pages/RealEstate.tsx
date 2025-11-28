import SolutionPage from "@/components/SolutionPage";
import { realEstateData, realEstateImages } from "@/data/realEstateData";

const RealEstate = () => {
  return (
    <SolutionPage
      data={realEstateData}
      images={realEstateImages}
      pageTitle="AI Calling for Real Estate | CloserX.ai"
      metaDescription="Close more real estate deals with AI agents. Call 1,000+ leads per day, schedule showings automatically, and never miss a buyer. Purpose-built for real estate."
    />
  );
};

export default RealEstate;
