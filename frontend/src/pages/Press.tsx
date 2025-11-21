import { useEffect } from "react";
import AboutPage from "@/components/AboutPage";
import { pressMediaData } from "@/data/pressMediaData";

const Press = () => {
  useEffect(() => {
    document.title = "Press & Media | CloserX.ai";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Press releases, media coverage, and press resources from CloserX.ai. Download press kits, brand assets, and contact our press team for media inquiries."
      );
    }
  }, []);

  return (
    <AboutPage
      data={pressMediaData}
      pageTitle="Press & Media | CloserX.ai"
      metaDescription="Press releases, media coverage, and press resources from CloserX.ai. Download press kits, brand assets, and contact our press team for media inquiries."
    />
  );
};

export default Press;

