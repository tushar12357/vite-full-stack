import SolutionPage from "@/components/SolutionPage";
import { forEnterprisesData, forEnterprisesImages } from "@/data/forEnterprisesData";

const ForEnterprises = () => {
  return (
    <SolutionPage
      data={forEnterprisesData}
      images={forEnterprisesImages}
      pageTitle="Enterprise AI Calling Platform | Global Scale, Complete Security | CloserX"
      metaDescription="Deploy intelligent voice automation across your enterprise. SOC 2 certified, 99.99% uptime, 50+ languages. Custom solutions for Fortune 500 companies."
    />
  );
};

export default ForEnterprises;
