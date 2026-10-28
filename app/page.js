import { HOME_DESCRIPTION, HOME_TITLE, JsonLd, buildMetadata, pageSchema } from "@/lib/seo";
import AmenitiesSection from "@/components/AmenitiesSection";
import BlogSection from "@/components/BlogsSection";
import EMICalculator from "@/components/Emicalculator";
import FaqSection, { FAQS } from "@/components/FaqSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import LocationSection from "@/components/LocationSection";
import MasterPlanSection from "@/components/MasterPlanSection";
import PriceListSection from "@/components/PriceListSection";
import ProjectHighlights from "@/components/ProjectHighlights";
import InvestmentSection from "@/components/InvestmentSection";
import ApartmentSection from "@/components/ApartmentSection";
import RERASection from "@/components/ReraSection";
import TopSchoolsSection from "@/components/TopSchoolsSection";
import TopHospitalsSection from "@/components/TopHospitalsSection";
import TopShoppingSection from "@/components/TopShoppingSection";
import SobhaGroupSection from "@/components/SobhaGroupSection";

const KEYWORDS = [
  "Sobha Parkcity",
  "Sobha Parkcity Hennur Main Road",
  "Sobha Parkcity new launch",
  "Sobha Parkcity pre launch",
  "Sobha Parkcity price",
  "Sobha Parkcity brochure download",
  "Sobha Parkcity RERA",
  "Sobha Parkcity possession date",
  "Sobha new project Hennur Bangalore",
  "Sobha upcoming project Bangalore 2026",
  "luxury apartments Hennur Bangalore",
  "new launch apartments Hennur Main Road",
];

export const metadata = buildMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
  keywords: KEYWORDS,
});

const homeSchema = pageSchema({
  path: "/",
  name: "Home",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  faqs: FAQS,
});

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema} />
      <HeroSection />
      <ProjectHighlights />
      <PriceListSection />
      <EMICalculator />
      <FloorPlanSection />
      <MasterPlanSection />
      <LocationSection />
      <AmenitiesSection />
      <GallerySection />
      <InvestmentSection />
      <ApartmentSection />
      <RERASection />
      <TopSchoolsSection />
      <TopHospitalsSection />
      <TopShoppingSection />
      <SobhaGroupSection />
      <FaqSection />
      <BlogSection />
    </>
  );
}
