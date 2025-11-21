import SolutionPage from "@/components/SolutionPage";
import { appointmentSchedulingData, appointmentSchedulingImages } from "@/data/appointmentSchedulingData";

const AppointmentScheduling = () => {
  return (
    <SolutionPage
      data={appointmentSchedulingData}
      images={appointmentSchedulingImages}
      pageTitle="AI Appointment Scheduling | CloserX.ai"
      metaDescription="Fill your calendar while you sleep. AI agents call prospects, check availability, and book appointments directly into your calendar."
    />
  );
};

export default AppointmentScheduling;
