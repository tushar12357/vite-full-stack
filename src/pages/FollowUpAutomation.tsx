import SolutionPage from "@/components/SolutionPage";
import { followUpAutomationData, followUpAutomationImages } from "@/data/followUpAutomationData";

const FollowUpAutomation = () => {
  return (
    <SolutionPage
      data={followUpAutomationData}
      images={followUpAutomationImages}
      pageTitle="AI Follow-Up Automation | CloserX.ai"
      metaDescription="Never let a lead go cold again. Automated follow-up calls that nurture prospects from first contact to closed deal with perfect timing and persistence."
    />
  );
};

export default FollowUpAutomation;
