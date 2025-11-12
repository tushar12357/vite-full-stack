import workflowImage from "@/assets/image.png";
import { discoverCloserXData } from "@/data/discoverCloserXData";
import TwoColumnFeatureSection from "@/components/TwoColumnFeatureSection";

const DiscoverCloserX = () => {
  const { tag, mainTitle, subtitle, leftColumn, features } = discoverCloserXData;

  return (
    <TwoColumnFeatureSection
      data={{
        tag,
        mainTitle,
        subtitle,
        leftColumn,
        features,
        rightImage: workflowImage,
        rightImageAlt: "AI Workflow Diagram",
      }}
    />
  );
};

export default DiscoverCloserX;

