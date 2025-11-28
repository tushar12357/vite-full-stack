import SolutionPage from "@/components/SolutionPage";
import { callCenterData, callCenterImages } from "@/data/callCenterData";

const CallCenters = () => {
  return (
    <SolutionPage
      data={callCenterData}
      images={callCenterImages}
      pageTitle="AI Agents for Call Centers | Scale Instantly, Save 90% | CloserX"
      metaDescription="Augment your call center with unlimited AI agents. Handle overflow, reduce wait times, and cut costs by 90%. Enterprise-grade platform trusted by Fortune 500s."
    />
  );
};

export default CallCenters;
