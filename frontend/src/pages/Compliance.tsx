import { useEffect } from "react";
import AboutPage from "@/components/AboutPage";
import { complianceData } from "@/data/complianceData";

const Compliance = () => {
  useEffect(() => {
    document.title = "Compliance & Security | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Enterprise-grade security and compliance. SOC 2 Type II certified, ISO 27001 compliant, GDPR compliant, and more. Learn about CloserX.ai's security measures and compliance standards."
      );
    }
  }, []);

  return (
    <AboutPage
      data={complianceData}
      pageTitle="Compliance & Security | CloserX.ai"
      metaDescription="Enterprise-grade security and compliance. SOC 2 Type II certified, ISO 27001 compliant, GDPR compliant, and more. Learn about CloserX.ai's security measures and compliance standards."
    />
  );
};

export default Compliance;

