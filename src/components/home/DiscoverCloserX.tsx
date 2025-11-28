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
        rightImage: "https://storage.googleapis.com/msgsndr/LK2LrQP5tkIZ3ahmumnr/media/69208a79f8fa3b2a122580a4.png",
        rightImageAlt: "AI Workflow Diagram",
      }}
    />
  );
};

export default DiscoverCloserX;

