import SolutionPage from "@/components/SolutionPage";
import { healthcareData, healthcareImages } from "@/data/healthcareData";

const Healthcare = () => {
  return (
    <SolutionPage
      data={healthcareData}
      images={healthcareImages}
      pageTitle="AI Voice Automation for Healthcare | Reduce No-Shows by 47% | CloserX"
      metaDescription="Transform patient engagement with HIPAA-compliant AI calling. Automate appointments, reduce no-shows, and let staff focus on care. 500+ practices trust CloserX."
    />
  );
};

export default Healthcare;
