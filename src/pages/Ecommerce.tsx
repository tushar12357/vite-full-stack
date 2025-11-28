import SolutionPage from "@/components/SolutionPage";
import { ecommerceData, ecommerceImages } from "@/data/ecommerceData";

const Ecommerce = () => {
  return (
    <SolutionPage
      data={ecommerceData}
      images={ecommerceImages}
      pageTitle="AI Sales Calls for E-commerce | Recover 37% of Abandoned Carts | CloserX"
      metaDescription="Turn browsers into buyers with AI-powered sales calls. Recover abandoned carts, provide instant support, and drive repeat purchases. 1,000+ stores trust CloserX."
    />
  );
};

export default Ecommerce;
