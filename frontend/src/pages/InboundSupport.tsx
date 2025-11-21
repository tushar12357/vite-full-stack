import SolutionPage from "@/components/SolutionPage";
import { inboundSupportData, inboundSupportImages } from "@/data/inboundSupportData";

const InboundSupport = () => {
  return (
    <SolutionPage
      data={inboundSupportData}
      images={inboundSupportImages}
      pageTitle="Inbound Support AI | CloserX.ai"
      metaDescription="Never miss another customer call. Answer every inbound call instantly, 24/7 with AI that resolves 90% of issues without human agents."
    />
  );
};

export default InboundSupport;
