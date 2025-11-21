import SolutionPage from "@/components/SolutionPage";
import { forResellersData, forResellersImages } from "@/data/forResellersData";

const ForResellers = () => {
  return (
    <SolutionPage
      data={forResellersData}
      images={forResellersImages}
      pageTitle="White-Label AI Calling Platform | Start Your Agency Today | CloserX"
      metaDescription="Launch your AI calling agency in 8 minutes. Complete white-label solution, proven templates, 2,847 successful agencies. Earn $10-40K MRR. Start at $97/mo."
    />
  );
};

export default ForResellers;
