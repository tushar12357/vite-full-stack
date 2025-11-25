import SolutionPage from "@/components/SolutionPage";
import { forAgenciesData, forAgenciesImages } from "@/data/forAgenciesData";

const ForAgencies = () => {
  return (
    <SolutionPage
      data={forAgenciesData}
      images={forAgenciesImages}
      pageTitle="For Agencies - White Label AI Calling | CloserX.ai"
      metaDescription="Launch your own AI calling agency in 24 hours. White-label platform with your brand. Keep 100% of revenue. Built for agencies."
    />
  );
};

export default ForAgencies;
