import SolutionPage from "@/components/SolutionPage";
import { outboundSalesData, outboundSalesImages } from "@/data/outboundSalesData";

const OutboundSales = () => {
  return (
    <SolutionPage
      data={outboundSalesData}
      images={outboundSalesImages}
      pageTitle="Outbound Sales AI Calling | CloserX.ai"
      metaDescription="Turn cold calls into closed deals with AI. Make 10,000+ outbound calls per day with AI voice agents that convert 3x better than human teams."
    />
  );
};

export default OutboundSales;
