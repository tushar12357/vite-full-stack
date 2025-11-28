import SolutionPage from "@/components/SolutionPage";
import { financialServiceData, financialServiceImages } from "@/data/financialServiceData";

const FinancialServices = () => {
  return (
    <SolutionPage
      data={financialServiceData}
      images={financialServiceImages}
      pageTitle="AI Calling for Financial Services | Convert 68% More Leads | CloserX"
      metaDescription="Accelerate financial growth with compliant AI voice automation. Qualify leads instantly, provide 24/7 support, and increase conversions. SOC 2 certified."
    />
  );
};

export default FinancialServices;
